# String Casing

Functions that modify string casing in a locale‑aware and Unicode‑safe way.

---

## capitalize

Capitalizes the **first grapheme cluster** of a string.

### Signature
```ts
capitalize(input?: string, locale?: string): string
```

### Guarantees
- Never throws on null or undefined
- Respects locale‑specific casing rules
- Correctly handles Unicode characters

---

## capitalizeWords

Capitalizes the first grapheme of each word.

---

## lower / upper

Locale‑aware lowercase and uppercase transformations.
