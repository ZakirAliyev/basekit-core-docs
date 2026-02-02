# Core Concepts

Understanding these concepts is essential to using Basekit correctly.

---

## Unicode & Grapheme Clusters

JavaScript strings are UTF‑16 encoded.  
`.length` does **not** represent visible characters.

Basekit uses `Intl.Segmenter` (when available) to operate on **grapheme clusters**.
When unavailable, it safely falls back to code‑point iteration.

---

## Locale Awareness

Casing and comparisons depend on language rules.

```ts
upper("i", "tr-TR") // "İ"
```

Basekit always respects locale‑specific behavior when applicable.

---

## Defensive String Handling

All APIs safely accept:
- `string`
- `null`
- `undefined`

Functions **never throw** due to invalid string input.
