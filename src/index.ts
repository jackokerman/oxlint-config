import {defineConfig} from "oxlint";

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
	"TSTypeAliasDeclaration",
];

/**
 * It enforces JSDoc on exported functions, classes, and TypeScript types.
 */
export const jsdocConfig = defineConfig({
	rules: {
		"jsdoc-js/multiline-blocks": ["error", {noSingleLineBlocks: true}],
		"jsdoc-js/require-description": [
			"error",
			{contexts: jsdocDeclarationContexts},
		],
		"jsdoc-js/require-description-complete-sentence": "error",
		"jsdoc-js/require-jsdoc": [
			"error",
			{
				contexts: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
				publicOnly: {esm: true},
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
 * It contains general JavaScript and TypeScript style rules.
 */
export const styleConfig = defineConfig({
	rules: {
		curly: "error",
		eqeqeq: ["error", "always"],
		"func-style": ["error", "declaration", {allowArrowFunctions: true}],
		"import/no-named-export": "off",
		"import/no-nodejs-modules": "off",
		"max-params": ["error", 4],
		"no-await-in-loop": "off",
		"no-else-return": ["error", {allowElseIf: false}],
		"no-magic-numbers": "off",
		"no-nested-ternary": "off",
		"no-ternary": "off",
		"no-useless-concat": "error",
		"no-var": "error",
		"prefer-const": ["error", {destructuring: "all"}],
		"prefer-template": "error",
		"sort-keys": "off",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/no-nested-ternary": "off",
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
		styleConfig,
	],
});

export default config;
