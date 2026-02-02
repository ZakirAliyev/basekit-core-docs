# Getting Started

## Installation

Install `basekit-core` using your favorite package manager:

::: code-group
```bash [npm]
npm install basekit-core
```

```bash [pnpm]
pnpm add basekit-core
```

```bash [yarn]
yarn add basekit-core
```
:::

## Basic Usage

Import functions directly from the package. The library is tree-shakable, so your bundle will only include what you use.

```typescript
import { capitalize, slugify } from 'basekit-core'

console.log(capitalize('hello world')) // "Hello world"
console.log(slugify('BaseKit Core is Awesome!')) // "basekit-core-is-awesome"
```

## TypeScript Support

Basekit Core is written in TypeScript and ships with type definitions generated at build time. No `@types` package is required.
