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
