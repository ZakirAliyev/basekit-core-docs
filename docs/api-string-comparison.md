# String Comparison

---

## equalsIgnoreCase

Performs a locale‑aware, case‑insensitive comparison.

```ts
equalsIgnoreCase(a, b, locale?): boolean
```

---

## compareLocale

Compares strings using `Intl.Collator` with LRU caching.

### Runtime Notes
- Cached collators prevent repeated allocations
- Falls back to `localeCompare` when unavailable
