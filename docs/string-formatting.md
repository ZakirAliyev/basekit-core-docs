# String Formatting

## slugify

Converts a string into a URL-safe slug.

```ts
slugify(input?: string, locale?: string, maxLength?: number): string
```

### Behavior

- Normalizes whitespace
- Applies transliteration
- Removes diacritics
- Lowercases using locale rules
- Collapses multiple hyphens

### Example

```ts
slugify("Heydər Əliyev")
// "heyder-eliyev"
```

### Edge Cases

- null or undefined input returns an empty string
- Multiple spaces collapse into a single hyphen
- Length truncation never leaves trailing hyphens

## truncate

Truncates a string using grapheme-safe slicing.
