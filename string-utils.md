# String Utils Documentation

## Overview
A comprehensive collection of string manipulation utilities with locale-aware operations and Azerbaijani transliteration support.

## Import
```typescript
import {
    capitalize,
    capitalizeWords,
    lower,
    upper,
    trim,
    normalizeSpaces,
    truncate,
    // ... other functions
} from './string-utils'
```

## Functions

### Text Transformation

#### `capitalize(input, locale?)`
Capitalizes the first character of a string.
```typescript
capitalize("hello world", "en-US") // "Hello world"
capitalize("", "en-US") // ""
```

#### `capitalizeWords(input, locale?)`
Capitalizes the first character of each word.
```typescript
capitalizeWords("hello world", "en-US") // "Hello World"
```

#### `lower(input, locale?)`
Converts string to lowercase.
```typescript
lower("HELLO", "en-US") // "hello"
```

#### `upper(input, locale?)`
Converts string to uppercase.
```typescript
upper("hello", "en-US") // "HELLO"
```

### Text Cleaning & Formatting

#### `trim(input)`
Removes whitespace from both ends of a string.
```typescript
trim("  hello  ") // "hello"
```

#### `normalizeSpaces(input)`
Replaces multiple spaces with a single space.
```typescript
normalizeSpaces("hello   world") // "hello world"
```

#### `truncate(input, length, suffix?, locale?)`
Truncates string to specified length.
```typescript
truncate("Hello world", 5, "...", "en-US") // "Hello..."
```

#### `removeNonAlphaNumeric(input)`
Keeps only letters and numbers.
```typescript
removeNonAlphaNumeric("hello123!") // "hello123"
```

#### `slugify(input, locale?, maxLength?)`
Creates URL-friendly slug.
```typescript
slugify("Hello World!", "en-US") // "hello-world"
```

### Transliteration

#### `extendTransliteration(map)`
Extends the transliteration map for Azerbaijani characters.
```typescript
extendTransliteration({ "ç": "ch", "ğ": "gh" })
```

### Search & Comparison

#### `startsWithIgnoreCase(input, search, locale?)`
Case-insensitive starts with check.
```typescript
startsWithIgnoreCase("Hello", "he", "en-US") // true
```

#### `endsWithIgnoreCase(input, search, locale?)`
Case-insensitive ends with check.
```typescript
endsWithIgnoreCase("Hello", "lo", "en-US") // true
```

#### `includesIgnoreCase(input, search, locale?)`
Case-insensitive includes check.
```typescript
includesIgnoreCase("Hello World", "world", "en-US") // true
```

#### `equalsIgnoreCase(a, b, locale?)`
Case-insensitive string comparison.
```typescript
equalsIgnoreCase("HELLO", "hello", "en-US") // true
```

#### `compareLocale(a, b, locale?, sensitivity?)`
Locale-sensitive string comparison.
```typescript
compareLocale("café", "cafe", "fr-FR") // 0 (equal)
```

### Text Analysis

#### `isEmptyString(input)`
Checks if string is empty.
```typescript
isEmptyString("") // true
isEmptyString(" ") // false
isEmptyString(null) // true
```

#### `count(input, needle, locale?)`
Counts occurrences of substring.
```typescript
count("hello hello", "hello") // 2
```

#### `extractInitials(input, locale?)`
Extracts initials from string.
```typescript
extractInitials("Hello World", "en-US") // "HW"
```

### String Manipulation

#### `repeat(input, times)`
Repeats string specified number of times.
```typescript
repeat("hello", 3) // "hellohellohello"
```

#### `padLeft(input, length, pad?)`
Pads string from the left.
```typescript
padLeft("5", 3, "0") // "005"
```

#### `padRight(input, length, pad?)`
Pads string from the right.
```typescript
padRight("5", 3, "0") // "500"
```

#### `reverse(input, locale?)`
Reverses string (grapheme-aware).
```typescript
reverse("hello", "en-US") // "olleh"
```

#### `safeSubstring(input, start, end?, locale?)`
Safe substring with grapheme cluster support.
```typescript
safeSubstring("hello", 1, 3, "en-US") // "el"
```

#### `removeDiacritics(input)`
Removes diacritic marks.
```typescript
removeDiacritics("café") // "cafe"
```

### String Validation

#### `ensurePrefix(input, prefix)`
Ensures string starts with prefix.
```typescript
ensurePrefix("hello", "pre-") // "pre-hello"
ensurePrefix("pre-hello", "pre-") // "pre-hello"
```

#### `ensureSuffix(input, suffix)`
Ensures string ends with suffix.
```typescript
ensureSuffix("hello", ".com") // "hello.com"
ensureSuffix("hello.com", ".com") // "hello.com"
```

## Constants

### `translitBase`
Azerbaijani character transliteration table:
```typescript
{
    "ə": "e", "Ə": "e",
    "ı": "i", "İ": "i", 
    "ş": "s", "Ş": "s",
    "ğ": "g", "Ğ": "g",
    "ç": "c", "Ç": "c",
    "ö": "o", "Ö": "o",
    "ü": "u", "Ü": "u",
    "ñ": "n", "Ñ": "n"
}
```

## Types

### `UnknownString`
```typescript
type UnknownString = string | null | undefined
```

All functions accept this type and automatically convert to string.

## Features

- **Locale-aware**: Most functions accept locale parameter
- **Unicode support**: Grapheme clusters and diacritics
- **Performance caching**: Cached Segmenter and Collator objects
- **Type safety**: Full TypeScript support
- **Transliteration**: Azerbaijani character support