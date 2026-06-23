declare const config: {
    plugins: ("unicorn" | "typescript" | "import" | "promise" | "node")[];
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
        "sort-imports": ["error", {
            allowSeparatedGroups: false;
            ignoreCase: false;
            ignoreDeclarationSort: false;
            ignoreMemberSort: false;
            memberSyntaxSortOrder: ("all" | "none" | "multiple" | "single")[];
        }];
        curly: "error";
        "func-style": "off";
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
