import {defineConfig} from "oxlint";

const config = defineConfig({
	plugins: ["typescript", "unicorn", "import", "promise", "node"],
	jsPlugins: [
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
		"import/consistent-type-specifier-style": ["error", "prefer-top-level"],
		"import/first": "error",
		"import/no-duplicates": "error",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"sort-imports": "off",
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
		"typescript/no-explicit-any": "error",
		"unicorn/no-abusive-eslint-disable": "error",
		"unicorn/no-nested-ternary": "off",
	},
	env: {
		node: true,
	},
	ignorePatterns: ["node_modules", "dist"],
});

export default config;
