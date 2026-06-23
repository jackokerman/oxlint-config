import { defineConfig } from "oxlint";
/**
 * It centralizes plugin, category, environment, and ignore settings.
 */
export const runtimeConfig = defineConfig({
    plugins: ["typescript", "unicorn", "import", "promise", "node"],
    jsPlugins: [
        {
            name: "jsdoc-js",
            specifier: "eslint-plugin-jsdoc",
        },
        {
            name: "simple-import-sort",
            specifier: "eslint-plugin-simple-import-sort",
        },
    ],
    categories: {
        correctness: "error",
        suspicious: "error",
        pedantic: "off",
        perf: "warn",
        style: "off",
        restriction: "off",
    },
    env: {
        node: true,
    },
    ignorePatterns: ["node_modules", "dist"],
});
/**
 * It contains rules that only make sense for TypeScript-aware source files.
 */
export const typescriptConfig = defineConfig({
    rules: {
        "typescript/consistent-type-definitions": ["error", "type"],
        "typescript/consistent-type-imports": [
            "error",
            {
                disallowTypeAnnotations: true,
                fixStyle: "separate-type-imports",
                prefer: "type-imports",
            },
        ],
        "typescript/no-explicit-any": "error",
        "typescript/no-empty-object-type": "error",
        "typescript/no-wrapper-object-types": "error",
    },
});
/**
 * It contains import layout and import hygiene rules.
 */
export const importsConfig = defineConfig({
    rules: {
        "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
        "import/first": "error",
        "import/no-duplicates": "error",
        "simple-import-sort/exports": "error",
        "simple-import-sort/imports": "error",
        "sort-imports": "off",
    },
});
const jsdocDeclarationContexts = [
    "ArrowFunctionExpression",
    "ClassDeclaration",
    "FunctionDeclaration",
    "FunctionExpression",
    "TSInterfaceDeclaration",
    "TSPropertySignature",
    "TSTypeAliasDeclaration",
];
/**
 * It enforces JSDoc on exported functions, classes, and TypeScript types.
 */
export const jsdocConfig = defineConfig({
    rules: {
        "jsdoc-js/multiline-blocks": ["error", { noSingleLineBlocks: true }],
        "jsdoc-js/require-description": [
            "error",
            { contexts: jsdocDeclarationContexts },
        ],
        "jsdoc-js/require-description-complete-sentence": "error",
        "jsdoc-js/require-jsdoc": [
            "error",
            {
                contexts: [
                    "TSInterfaceDeclaration",
                    "TSPropertySignature",
                    "TSTypeAliasDeclaration",
                ],
                publicOnly: { esm: true },
                require: {
                    ArrowFunctionExpression: true,
                    ClassDeclaration: true,
                    FunctionDeclaration: true,
                    FunctionExpression: true,
                    MethodDefinition: false,
                },
            },
        ],
    },
});
/**
 * It contains promise-chain safety rules.
 */
export const promiseConfig = defineConfig({
    rules: {
        "no-promise-executor-return": "error",
        "promise/always-return": "error",
        "promise/catch-or-return": "error",
        "promise/no-return-wrap": "error",
    },
});
/**
 * It contains general JavaScript and TypeScript style rules.
 */
export const styleConfig = defineConfig({
    rules: {
        curly: "error",
        "default-case-last": "error",
        "default-param-last": "error",
        eqeqeq: ["error", "always"],
        "func-style": ["error", "declaration", { allowArrowFunctions: true }],
        "guard-for-in": "error",
        "import/no-named-export": "off",
        "import/no-nodejs-modules": "off",
        "max-params": ["error", 4],
        "no-alert": "error",
        "no-await-in-loop": "off",
        "no-else-return": ["error", { allowElseIf: false }],
        "no-implicit-coercion": "error",
        "no-magic-numbers": "off",
        "no-new-func": "error",
        "no-nested-ternary": "off",
        "no-param-reassign": ["error", { props: true }],
        "no-ternary": "off",
        "no-throw-literal": "error",
        "no-useless-concat": "error",
        "no-useless-return": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "operator-assignment": "error",
        "prefer-exponentiation-operator": "error",
        "prefer-const": ["error", { destructuring: "all" }],
        "prefer-object-spread": "error",
        "prefer-regex-literals": "error",
        "prefer-template": "error",
        radix: ["error", "always"],
        "sort-keys": "off",
        "unicorn/no-abusive-eslint-disable": "error",
        "unicorn/no-instanceof-array": "error",
        "unicorn/no-nested-ternary": "off",
        "unicorn/no-new-array": "error",
        "unicorn/no-useless-undefined": "error",
        "unicorn/prefer-includes": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-string-slice": "error",
        yoda: ["error", "never"],
    },
});
/**
 * It is the complete shared preset used by ordinary package consumers.
 */
export const config = defineConfig({
    extends: [
        runtimeConfig,
        typescriptConfig,
        importsConfig,
        jsdocConfig,
        promiseConfig,
        styleConfig,
    ],
});
export default config;
