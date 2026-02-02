# String Formatting

---

## slugify

Creating URL‑safe slugs across languages is deceptively difficult.

### What it solves
- Diacritics (`ğ`, `ə`, `ö`)
- Unicode normalization
- Locale‑aware lowercasing
- Safe trimming and collapsing

### Signature
```ts
slugify(input?: string, locale?: string, maxLength?: number): string
```

### Guarantees
- No leading or trailing hyphens
- Deterministic output
- Never throws

### Example
```ts
slugify("Heydər Əliyev")
// "heyder-eliyev"
```

---

## truncate

Truncates a string using grapheme‑safe slicing.

- Prevents broken emojis
- Preserves visible characters
