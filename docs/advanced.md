# Advanced Topics

---

## Transliteration

Basekit includes a built‑in transliteration map for common Latin‑based scripts.

### extendTransliteration

```ts
extendTransliteration(map: Record<string, string>): void
```

⚠️ **Warning:** This mutates global transliteration state.
Use cautiously in shared environments.

---

## Runtime & Performance Notes

- Uses `Intl.Segmenter` and `Intl.Collator` when available
- LRU cache prevents unbounded memory growth
- Avoids RegExp backtracking
- Designed for predictable runtime behavior

---

## Design Trade‑offs

- Regular expressions are insufficient for Unicode graphemes
- External dependencies introduce unpredictable runtime cost
