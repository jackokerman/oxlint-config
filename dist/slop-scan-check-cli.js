#!/usr/bin/env node
import { spawn } from "node:child_process";
import process from "node:process";
function isErrorWithCode(error, code) {
    return (error instanceof Error &&
        "code" in error &&
        error.code === code);
}
function spawnError(error) {
    if (isErrorWithCode(error, "ENOENT")) {
        return new Error("`slop-scan` is not installed or not on PATH. Install it in this project, then rerun `slop-scan-check`.", { cause: error });
    }
    return error instanceof Error ? error : new Error(String(error));
}
function failedWithoutCode(signal) {
    const detail = signal === null ? "" : ` after signal ${signal}`;
    return new Error(`slop-scan exited without a status code${detail}.`);
}
function runSlopScanCaptured(args) {
    return new Promise((resolve, reject) => {
        const proc = spawn("slop-scan", args, {
            stdio: ["ignore", "pipe", "pipe"],
        });
        if (proc.stdout === null || proc.stderr === null) {
            reject(new Error("Failed to capture slop-scan output."));
            return;
        }
        let stdout = "";
        let stderr = "";
        proc.stdout.setEncoding("utf8");
        proc.stderr.setEncoding("utf8");
        proc.stdout.on("data", (chunk) => {
            stdout += chunk;
        });
        proc.stderr.on("data", (chunk) => {
            stderr += chunk;
        });
        proc.on("error", (error) => {
            reject(spawnError(error));
        });
        proc.on("close", (code, signal) => {
            if (code === null) {
                reject(failedWithoutCode(signal));
                return;
            }
            resolve({ code, stdout, stderr });
        });
    });
}
function runSlopScanInherited(args) {
    return new Promise((resolve, reject) => {
        const proc = spawn("slop-scan", args, { stdio: "inherit" });
        proc.on("error", (error) => {
            reject(spawnError(error));
        });
        proc.on("close", (code, signal) => {
            if (code === null) {
                reject(failedWithoutCode(signal));
                return;
            }
            resolve();
        });
    });
}
function reportFindingCount(report) {
    if (typeof report !== "object" || report === null) {
        return undefined;
    }
    if (!("summary" in report)) {
        return undefined;
    }
    const summary = report.summary;
    if (typeof summary !== "object" || summary === null) {
        return undefined;
    }
    if (!("findingCount" in summary)) {
        return undefined;
    }
    return typeof summary.findingCount === "number"
        ? summary.findingCount
        : undefined;
}
async function main() {
    const result = await runSlopScanCaptured(["scan", ".", "--json"]);
    if (result.code !== 0) {
        process.stdout.write(result.stdout);
        process.stderr.write(result.stderr);
        process.exit(result.code);
    }
    let report;
    try {
        report = JSON.parse(result.stdout);
    }
    catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        process.stderr.write(`Failed to parse slop-scan JSON output: ${message}\n`);
        process.exit(1);
    }
    const findingCount = reportFindingCount(report);
    if (findingCount === undefined) {
        process.stderr.write("slop-scan JSON output did not include summary.findingCount\n");
        process.exit(1);
    }
    if (findingCount > 0) {
        process.stderr.write(`slop-scan found ${findingCount} finding(s):\n\n`);
        await runSlopScanInherited(["scan", ".", "--lint"]);
        process.exit(1);
    }
    console.log("0 findings");
}
try {
    await main();
}
catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    process.stderr.write(`${message}\n`);
    process.exit(1);
}
