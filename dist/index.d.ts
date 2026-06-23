/**
 * It centralizes plugin, category, environment, and ignore settings.
 */
export declare const runtimeConfig: {
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
    env: {
        node: true;
    };
    ignorePatterns: string[];
};
/**
 * It contains rules that only make sense for TypeScript-aware source files.
 */
export declare const typescriptConfig: {
    rules: {
        "typescript/consistent-type-definitions": ["error", "type"];
        "typescript/consistent-type-imports": ["error", {
            disallowTypeAnnotations: true;
            fixStyle: "separate-type-imports";
            prefer: "type-imports";
        }];
        "typescript/no-explicit-any": "error";
    };
};
/**
 * It contains import layout and import hygiene rules.
 */
export declare const importsConfig: {
    rules: {
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"];
        "import/first": "error";
        "import/no-duplicates": "error";
        "simple-import-sort/exports": "error";
        "simple-import-sort/imports": "error";
        "sort-imports": "off";
    };
};
/**
 * It enforces JSDoc on exported functions, classes, and TypeScript types.
 */
export declare const jsdocConfig: {
    rules: {
        "jsdoc-js/multiline-blocks": ["error", {
            noSingleLineBlocks: boolean;
        }];
        "jsdoc-js/require-description": ["error", {
            contexts: string[];
        }];
        "jsdoc-js/require-description-complete-sentence": "error";
        "jsdoc-js/require-jsdoc": ["error", {
            contexts: string[];
            publicOnly: {
                esm: boolean;
            };
            require: {
                ArrowFunctionExpression: boolean;
                ClassDeclaration: boolean;
                FunctionDeclaration: boolean;
                FunctionExpression: boolean;
                MethodDefinition: boolean;
            };
        }];
    };
};
/**
 * It contains general JavaScript and TypeScript style rules.
 */
export declare const styleConfig: {
    rules: {
        curly: "error";
        eqeqeq: ["error", "always"];
        "func-style": ["error", "declaration", {
            allowArrowFunctions: true;
        }];
        "import/no-named-export": "off";
        "import/no-nodejs-modules": "off";
        "max-params": ["error", number];
        "no-await-in-loop": "off";
        "no-else-return": ["error", {
            allowElseIf: false;
        }];
        "no-magic-numbers": "off";
        "no-nested-ternary": "off";
        "no-ternary": "off";
        "no-useless-concat": "error";
        "no-var": "error";
        "prefer-const": ["error", {
            destructuring: "all";
        }];
        "prefer-template": "error";
        "sort-keys": "off";
        "unicorn/no-abusive-eslint-disable": "error";
        "unicorn/no-nested-ternary": "off";
    };
};
/**
 * It is the complete shared preset used by ordinary package consumers.
 */
export declare const config: {
    extends: ({
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
        env: {
            node: true;
        };
        ignorePatterns: string[];
    } | {
        rules: {
            "typescript/consistent-type-definitions": ["error", "type"];
            "typescript/consistent-type-imports": ["error", {
                disallowTypeAnnotations: true;
                fixStyle: "separate-type-imports";
                prefer: "type-imports";
            }];
            "typescript/no-explicit-any": "error";
        };
    } | {
        rules: {
            "import/consistent-type-specifier-style": ["error", "prefer-top-level"];
            "import/first": "error";
            "import/no-duplicates": "error";
            "simple-import-sort/exports": "error";
            "simple-import-sort/imports": "error";
            "sort-imports": "off";
        };
    } | {
        rules: {
            "jsdoc-js/multiline-blocks": ["error", {
                noSingleLineBlocks: boolean;
            }];
            "jsdoc-js/require-description": ["error", {
                contexts: string[];
            }];
            "jsdoc-js/require-description-complete-sentence": "error";
            "jsdoc-js/require-jsdoc": ["error", {
                contexts: string[];
                publicOnly: {
                    esm: boolean;
                };
                require: {
                    ArrowFunctionExpression: boolean;
                    ClassDeclaration: boolean;
                    FunctionDeclaration: boolean;
                    FunctionExpression: boolean;
                    MethodDefinition: boolean;
                };
            }];
        };
    } | {
        rules: {
            curly: "error";
            eqeqeq: ["error", "always"];
            "func-style": ["error", "declaration", {
                allowArrowFunctions: true;
            }];
            "import/no-named-export": "off";
            "import/no-nodejs-modules": "off";
            "max-params": ["error", number];
            "no-await-in-loop": "off";
            "no-else-return": ["error", {
                allowElseIf: false;
            }];
            "no-magic-numbers": "off";
            "no-nested-ternary": "off";
            "no-ternary": "off";
            "no-useless-concat": "error";
            "no-var": "error";
            "prefer-const": ["error", {
                destructuring: "all";
            }];
            "prefer-template": "error";
            "sort-keys": "off";
            "unicorn/no-abusive-eslint-disable": "error";
            "unicorn/no-nested-ternary": "off";
        };
    })[];
};
export default config;
