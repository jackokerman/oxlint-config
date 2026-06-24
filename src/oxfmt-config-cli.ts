#!/usr/bin/env node

import {readFileSync, writeFileSync} from "node:fs";
import {resolve} from "node:path";

import {renderOxfmtConfig} from "./oxfmt-config.js";

const CONFIG_PATH = ".oxfmtrc.json";

function usage(): string {
	return [
		"Usage: jack-oxfmt-config <write|check> [path]",
		"",
		"Commands:",
		"  write  Write the shared Oxfmt config to .oxfmtrc.json",
		"  check  Verify .oxfmtrc.json matches the shared Oxfmt config",
	].join("\n");
}

function targetPath(inputPath: string | undefined): string {
	return resolve(inputPath ?? CONFIG_PATH);
}

function writeConfig(inputPath: string | undefined): void {
	const path = targetPath(inputPath);
	writeFileSync(path, renderOxfmtConfig());
	console.log(`Wrote ${path}`);
}

function checkConfig(inputPath: string | undefined): void {
	const path = targetPath(inputPath);
	const actual = readFileSync(path, "utf8");
	const expected = renderOxfmtConfig();

	if (actual === expected) {
		console.log(`${path} matches shared Oxfmt config`);
		return;
	}

	console.error(`${path} does not match shared Oxfmt config`);
	console.error("Run `jack-oxfmt-config write` to update it.");
	process.exitCode = 1;
}

const [, , command, path] = process.argv;

switch (command) {
	case "write":
		writeConfig(path);
		break;
	case "check":
		checkConfig(path);
		break;
	default:
		console.error(usage());
		process.exitCode = 1;
}
