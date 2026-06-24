/**
 * It is the shared Oxfmt config to materialize into project-local
 * `.oxfmtrc.json` files.
 */
export declare const oxfmtConfig: {
    readonly printWidth: 80;
    readonly useTabs: true;
    readonly tabWidth: 2;
    readonly singleQuote: true;
    readonly semi: true;
    readonly trailingComma: "all";
    readonly bracketSpacing: false;
    readonly jsdoc: {
        readonly commentLineStrategy: "keep";
        readonly lineWrappingStyle: "greedy";
    };
    readonly sortImports: {
        readonly newlinesBetween: true;
    };
    readonly sortPackageJson: false;
    readonly ignorePatterns: readonly [];
};
/**
 * It renders the shared Oxfmt config as the checked-in JSON file shape that
 * Oxfmt auto-discovers.
 */
export declare function renderOxfmtConfig(): string;
