# @jackokerman/oxlint-config

Shared Oxlint config and companion Oxfmt defaults for JavaScript and
TypeScript projects.

## Quick start

Install the lint preset next to `oxlint`:

```sh
bun add --dev oxlint @jackokerman/oxlint-config
```

Use it from `oxlint.config.ts`:

```ts
import config from "@jackokerman/oxlint-config";
import {defineConfig} from "oxlint";

export default defineConfig({extends: [config]});
```

## Formatter setup

When a project also uses the companion formatter stack, install `oxfmt` and
`@jackokerman/comment-width-check`:

```sh
bun add --dev oxfmt @jackokerman/comment-width-check
```

Oxfmt does not auto-discover shared package configs, so write the shared config
into the project:

```sh
bunx jack-oxfmt-config write
```

Add formatter scripts that use the checked-in `.oxfmtrc.json`:

```json
{
  "scripts": {
    "fmt": "oxfmt . && comment-width-check . --write",
    "fmt:check": "oxfmt --check . && comment-width-check .",
    "check:oxfmt-config": "jack-oxfmt-config check"
  }
}
```

`jack-oxfmt-config check` is intended for CI so local `.oxfmtrc.json` files do
not drift from the shared defaults.

## Exports

The default export is the complete Oxlint preset:

```ts
import config from "@jackokerman/oxlint-config";
```

Named config layers are available for projects that need to compose the preset
manually:

- `runtimeConfig` centralizes plugins, categories, environment settings, and
  ignore patterns.
- `typescriptConfig` contains TypeScript-specific rules.
- `importsConfig` contains import layout and hygiene rules.
- `styleConfig` contains general JavaScript and TypeScript style rules.

The companion formatter config is also exported for tools that need the object
directly:

```ts
import {oxfmtConfig, renderOxfmtConfig} from "@jackokerman/oxlint-config/oxfmt";
```

## Maintainer notes

Keep plugin declarations in `runtimeConfig`. Oxlint's `plugins` field is
replacement-style during config merging, so additive presets should not each
declare their own partial plugin lists unless the final composed config owns
that merge explicitly.

Start rule discovery from `node_modules/oxlint/configuration_schema.json`; it is
the local source of truth for supported rule names, option shapes, and inline
rule examples. The public rule index is
<https://oxc.rs/docs/guide/usage/linter/rules.html>.

Prefer explicit rule entries when this package makes a policy choice, including
explicit `off` entries for recommended rules that this config intentionally does
not want. Do not add a rule only because it exists; confirm that it catches a
real pattern this config should own.

Run the local checks before publishing:

```sh
bun run check
```

## Release policy

Use conventional commits:

- `fix:` publishes a patch.
- `feat:` publishes a minor.
- Breaking changes publish a major through `!` or `BREAKING CHANGE:`.

New lint errors are treated as minor releases by default. Package API or
config-consumption breaks are major releases.
