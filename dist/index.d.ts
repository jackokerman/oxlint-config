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
        "typescript/no-empty-object-type": "error";
        "typescript/no-wrapper-object-types": "error";
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
 * It contains promise-chain safety rules.
 */
export declare const promiseConfig: {
    rules: {
        "no-promise-executor-return": "error";
        "promise/always-return": "error";
        "promise/catch-or-return": "error";
        "promise/no-return-wrap": "error";
    };
};
/**
 * It contains general JavaScript and TypeScript style rules.
 */
export declare const styleConfig: {
    rules: {
        curly: "error";
        "default-case-last": "error";
        "default-param-last": "error";
        eqeqeq: ["error", "always"];
        "func-style": ["error", "declaration", {
            allowArrowFunctions: true;
        }];
        "guard-for-in": "error";
        "import/no-named-export": "off";
        "import/no-nodejs-modules": "off";
        "max-params": ["error", number];
        "no-alert": "error";
        "no-await-in-loop": "off";
        "no-else-return": ["error", {
            allowElseIf: false;
        }];
        "no-implicit-coercion": "error";
        "no-magic-numbers": "off";
        "no-new-func": "error";
        "no-nested-ternary": "off";
        "no-param-reassign": ["error", {
            props: true;
        }];
        "no-ternary": "off";
        "no-throw-literal": "error";
        "no-useless-concat": "error";
        "no-useless-return": "error";
        "no-var": "error";
        "object-shorthand": "error";
        "operator-assignment": "error";
        "prefer-exponentiation-operator": "error";
        "prefer-const": ["error", {
            destructuring: "all";
        }];
        "prefer-object-spread": "error";
        "prefer-regex-literals": "error";
        "prefer-template": "error";
        radix: ["error", "always"];
        "sort-keys": "off";
        "unicorn/no-abusive-eslint-disable": "error";
        "unicorn/no-instanceof-array": "error";
        "unicorn/no-nested-ternary": "off";
        "unicorn/no-new-array": "error";
        "unicorn/no-useless-undefined": "error";
        "unicorn/prefer-includes": "error";
        "unicorn/prefer-node-protocol": "error";
        "unicorn/prefer-string-slice": "error";
        yoda: ["error", "never"];
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
            "typescript/no-empty-object-type": "error";
            "typescript/no-wrapper-object-types": "error";
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
            "no-promise-executor-return": "error";
            "promise/always-return": "error";
            "promise/catch-or-return": "error";
            "promise/no-return-wrap": "error";
        };
    } | {
        rules: {
            curly: "error";
            "default-case-last": "error";
            "default-param-last": "error";
            eqeqeq: ["error", "always"];
            "func-style": ["error", "declaration", {
                allowArrowFunctions: true;
            }];
            "guard-for-in": "error";
            "import/no-named-export": "off";
            "import/no-nodejs-modules": "off";
            "max-params": ["error", number];
            "no-alert": "error";
            "no-await-in-loop": "off";
            "no-else-return": ["error", {
                allowElseIf: false;
            }];
            "no-implicit-coercion": "error";
            "no-magic-numbers": "off";
            "no-new-func": "error";
            "no-nested-ternary": "off";
            "no-param-reassign": ["error", {
                props: true;
            }];
            "no-ternary": "off";
            "no-throw-literal": "error";
            "no-useless-concat": "error";
            "no-useless-return": "error";
            "no-var": "error";
            "object-shorthand": "error";
            "operator-assignment": "error";
            "prefer-exponentiation-operator": "error";
            "prefer-const": ["error", {
                destructuring: "all";
            }];
            "prefer-object-spread": "error";
            "prefer-regex-literals": "error";
            "prefer-template": "error";
            radix: ["error", "always"];
            "sort-keys": "off";
            "unicorn/no-abusive-eslint-disable": "error";
            "unicorn/no-instanceof-array": "error";
            "unicorn/no-nested-ternary": "off";
            "unicorn/no-new-array": "error";
            "unicorn/no-useless-undefined": "error";
            "unicorn/prefer-includes": "error";
            "unicorn/prefer-node-protocol": "error";
            "unicorn/prefer-string-slice": "error";
            yoda: ["error", "never"];
        };
    })[];
};
export default config;
