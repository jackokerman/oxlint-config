declare const config: {
    plugins: ("unicorn" | "typescript" | "import" | "promise" | "node")[];
    jsPlugins: {
        name: string;
        specifier: string;
    }[];
    categories: {
        correctness: "error";
        suspicious: "error";
        pedantic: "off";
        perf: "warn";
        style: "off";
        restriction: "off";
    };
    rules: {
        "typescript/consistent-type-definitions": ["error", "type"];
        "typescript/consistent-type-imports": ["error", {
            disallowTypeAnnotations: true;
            fixStyle: "separate-type-imports";
            prefer: "type-imports";
        }];
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"];
        "import/first": "error";
        "import/no-duplicates": "error";
        "simple-import-sort/exports": "error";
        "simple-import-sort/imports": "error";
        "sort-imports": "off";
        curly: "error";
        "func-style": ["error", "declaration", {
            allowArrowFunctions: true;
        }];
        "import/no-named-export": "off";
        "import/no-nodejs-modules": "off";
        "no-await-in-loop": "off";
        "no-magic-numbers": "off";
        "no-nested-ternary": "off";
        "no-ternary": "off";
        "sort-keys": "off";
        "unicorn/no-nested-ternary": "off";
    };
    env: {
        node: true;
    };
    ignorePatterns: string[];
};
export default config;
