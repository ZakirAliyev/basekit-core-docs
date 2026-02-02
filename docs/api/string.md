# String Utilities

A collection of robust, locale-aware, and Unicode-safe string manipulation functions.

## `capitalize`

Capitalizes the first character of a string, respecting Unicode graphemes and locales.

```typescript
import { capitalize } from 'basekit-core'

capitalize('hello world') // "Hello world"
capitalize('istanbul', 'tr') // "İstanbul"
```

### Signature

```typescript
function capitalize(input: string, locale?: string): string
```

---

## `capitalizeWords`

Capitalizes the first character of every word in a string.

```typescript
import { capitalizeWords } from 'basekit-core'

capitalizeWords('hello world') // "Hello World"
```

---

## `slugify`

Converts a string into a URL-friendly slug. Handles transliteration of non-ASCII characters (e.g., specific replacements for Azerbaijani, Turkish, etc.) and strips special characters.

```typescript
import { slugify } from 'basekit-core'

slugify('Hello World!') // "hello-world"
slugify('Həyat gözəldir', 'az') // "heyat-gozeldir"
```

### Signature

```typescript
function slugify(input: string, locale?: string, maxLength?: number): string
```

---

## `truncate`

Truncates a string to a specified length, adding a suffix (defaulting to "…") if truncated. Aware of Unicode graphemes so it won't split an emoji in half.

```typescript
import { truncate } from 'basekit-core'

truncate('Hello World', 5) // "Hello…"
truncate('Hello World', 5, '..') // "Hello.."
```

---

## `splitGraphemes`

Splits a string into an array of visible glyphs (graphemes), rather than code units. Essential for correctly handling emojis and combining characters.

```typescript
import { splitGraphemes } from 'basekit-core'

splitGraphemes('👨‍👩‍👧‍👦') // ["👨‍👩‍👧‍👦"] (1 item)
// contrast with '👨‍👩‍👧‍👦'.split('') which gives 11 items
```

---

## `transliterate`

Replaces characters with their ASCII approximations based on an internal map (extensible). Useful for search indexing or slug generation.

```typescript
// internal usage mostly, but available if needed
```

---

## `removeNonAlphaNumeric`

Removes all characters that are not letters or numbers. Unicode aware if supported by the environment.

```typescript
import { removeNonAlphaNumeric } from 'basekit-core'

removeNonAlphaNumeric('Hello-World! 123') // "HelloWorld123"
```

---

## `count`

Counts the occurrences of a substring within a string, case-insensitive.

```typescript
import { count } from 'basekit-core'

count('Banana', 'a') // 3
```

---

## `padLeft` / `padRight`

Pads a string to a certain length with another string.

```typescript
import { padLeft, padRight } from 'basekit-core'

padLeft('7', 3, '0') // "007"
padRight('Hi', 4, '!') // "Hi!!"
```

---

## `reverse`

Reverses a string, respecting Unicode graphemes (so emojis remain intact).

```typescript
import { reverse } from 'basekit-core'

reverse('abc') // "cba"
reverse('👨‍👩‍👧‍👦') // "👨‍👩‍👧‍👦" (treated as single unit)
```

---

## `equalsIgnoreCase`

Compares two strings for equality, ignoring case and locale differences.

```typescript
import { equalsIgnoreCase } from 'basekit-core'

equalsIgnoreCase('Istanbul', 'istanbul') // true
```
