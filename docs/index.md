# @basekit/core

**Correct string handling in JavaScript is harder than it looks.**

Most libraries fail when dealing with:
- Unicode grapheme clusters (👨‍👩‍👧‍👦, emojis, combined characters)
- Locale-specific casing rules (Turkish, Azerbaijani, German)
- Diacritics and transliteration
- Predictable behavior in performance‑critical paths

**@basekit/core** exists to solve these problems — correctly, deterministically,
and without external dependencies.

---

## Why this library exists

JavaScript strings are UTF‑16 encoded.  
A visible character is not always a single code unit.

This causes subtle bugs in:
- `substring`, `slice`, `reverse`
- Casing (`toUpperCase`, `toLowerCase`)
- Slug generation
- User‑visible truncation

Basekit addresses these issues using native `Intl` APIs with safe fallbacks.

---

## Design principles

- Zero external dependencies
- Unicode‑ and grapheme‑safe by default
- Locale‑aware behavior
- Defensive handling of `null` and `undefined`
- Explicit runtime trade‑offs

---

## Non‑Goals

Basekit is intentionally **not**:
- a full i18n framework
- a polyfill library
- a framework‑specific helper set
- a kitchen‑sink utility package

Each exported function exists because it solves a **real runtime problem**.
