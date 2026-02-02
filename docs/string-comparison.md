# String Comparison

## equalsIgnoreCase

Performs a locale-aware, case-insensitive comparison.

```ts
equalsIgnoreCase(a, b, locale?): boolean
```

## compareLocale

Compares two strings using `Intl.Collator` when available.

- Uses an internal LRU cache
- Falls back to `localeCompare` when necessary
