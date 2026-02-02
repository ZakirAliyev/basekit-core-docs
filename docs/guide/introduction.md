# Introduction

**Basekit Core** is a zero-dependency utility library designed to solve common problems in JavaScript application development, with a heavy focus on **correctness**.

## Why Basekit Core?

JavaScript's standard library is improving, but it still lacks robust handling for many common scenarios, especially when it comes to internationalization (i18n), Unicode handling, and precise type safety.

**Basekit Core** fills this gap by providing:

- **Unicode-safe string manipulation**: Functions like `capitalize`, `truncate`, and `slugify` that actually work with emojis and non-Latin scripts.
- **Locale-aware operations**: Sorting, searching, and casing that respects the user's locale.
- **Robust functional helpers**: `debounce`, `throttle`, and `memoize` implementations that are production-ready.
- **Type safety**: Written in strict TypeScript to ensure you catch errors at compile time.

## Philosophy

1.  **Correctness First**: We prioritize correct behavior (especially for i18n) over naive implementations.
2.  **Zero Dependencies**: We don't drag in a graph of dependencies. What you see is what you get.
3.  **Modern**: We target modern execution environments that support ES Modules and `Intl` APIs.
