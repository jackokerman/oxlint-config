# @jackokerman/oxlint-config

Shared Oxlint defaults for my JS and TS tools.

## Usage

Install the config next to `oxlint`:

```sh
bun add --dev oxlint @jackokerman/oxlint-config
```

Use it from `oxlint.config.ts`:

```ts
import config from "@jackokerman/oxlint-config";
import {defineConfig} from "oxlint";

export default defineConfig({extends: [config]});
```

## Rules

This config starts from Devvy's resolved Oxlint settings, with `suspicious` promoted to errors and `perf` kept as warnings. It enforces import declaration/member sorting, import-at-top placement, duplicate import cleanup, separate top-level type imports, `type` aliases, function declarations for named functions while allowing arrow functions, strict equality, `const` for variables that are never reassigned, `let`/`const` instead of `var`, and early returns instead of unnecessary `else` blocks.

It does not enforce object key sorting, ternary bans, magic number bans, Node builtin bans, or named export bans.

## Release policy

Use conventional commits:

- `fix:` publishes a patch.
- `feat:` publishes a minor.
- Breaking changes publish a major through `!` or `BREAKING CHANGE:`.

New lint errors are treated as minor releases by default. Package API or config-consumption breaks are major releases.

## First publish checkpoint

Before the first release, configure npm trusted publishing for this repository or complete `npm login` in the release environment. Then run the release workflow from `main` and verify `@jackokerman/oxlint-config` is visible on npm.
