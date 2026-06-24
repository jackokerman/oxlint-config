/**
 * It is the shared Oxfmt config to materialize into project-local
 * `.oxfmtrc.json` files.
 */
export const oxfmtConfig = {
    printWidth: 80,
    useTabs: true,
    tabWidth: 2,
    singleQuote: true,
    semi: true,
    trailingComma: "all",
    bracketSpacing: false,
    jsdoc: {
        commentLineStrategy: "keep",
        lineWrappingStyle: "greedy",
    },
    sortImports: {
        newlinesBetween: true,
    },
    sortPackageJson: false,
    ignorePatterns: [],
};
/**
 * It renders the shared Oxfmt config as the checked-in JSON file shape that
 * Oxfmt auto-discovers.
 */
export function renderOxfmtConfig() {
    return `${JSON.stringify(oxfmtConfig, null, "\t")}\n`;
}
