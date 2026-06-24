# @jackokerman/oxlint-config

Shared Oxlint defaults for JavaScript and TypeScript projects.

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

## Oxfmt config

This package also ships the companion Oxfmt defaults used with the lint preset.
Oxfmt does not currently auto-discover shared package configs, so materialize
the checked-in project config:

```sh
bunx jack-oxfmt-config write
```

Then wire the local formatter scripts to the project-local `.oxfmtrc.json`:

```json
{
  "scripts": {
    "fmt": "oxfmt . && comment-width-check . --write",
    "fmt:check": "oxfmt --check . && comment-width-check .",
    "check:oxfmt-config": "jack-oxfmt-config check"
  }
}
```

Install `oxfmt` and `@jackokerman/comment-width-check` next to this package
when using the formatter stack.

## Config structure

The default export is the complete shared preset and is the right choice for
normal consumers.

Named config layers are also exported for future composition:

- `runtimeConfig` centralizes plugins, categories, environment settings, and
  ignore patterns.
- `typescriptConfig` contains TypeScript-specific rules.
- `importsConfig` contains import layout and hygiene rules.
- `styleConfig` contains general JavaScript and TypeScript style rules.

The `./oxfmt` export exposes the same formatter config used by the
`jack-oxfmt-config` CLI for tooling that wants the object directly.

Keep plugin declarations in `runtimeConfig`. Oxlint's `plugins` field is
replacement-style during config merging, so additive presets should not each
declare their own partial plugin lists unless the final composed config owns
that merge explicitly.

## Rule maintenance

Start rule discovery from `node_modules/oxlint/configuration_schema.json`; it is
the local source of truth for supported rule names, option shapes, and inline
rule examples. The public rule index is
<https://oxc.rs/docs/guide/usage/linter/rules.html>.

Prefer explicit rule entries when this package makes a policy choice, including
explicit `off` entries for recommended rules that this config intentionally does
not want. Do not add a rule only because it exists; confirm that it catches a
real pattern this config should own.

## Development

The exported config is the source of truth for enabled rules.

Run the local checks before publishing:

```sh
bun run check
```

## Release policy

Use conventional commits:

- `fix:` publishes a patch.
- `feat:` publishes a minor.
- Breaking changes publish a major through `!` or `BREAKING CHANGE:`.

New lint errors are treated as minor releases by default. Package API or config-consumption breaks are major releases.
