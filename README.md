# BaseKit Core Utils

🚀 TypeScript üçün high-performance utilit funksiyaları toplusu.

## Overview
BaseKit Core - String əməliyyatları və funksional proqramlaşdırma üçün optimize edilmiş TypeScript kitabxanası. Azərbaycan dilinə xas transliterasiya dəstəyi ilə.

## Features

- 🌍 **Locale-aware** string əməliyyatları
- 🔤 **Azərbaycan transliterasiyası** (ə, ş, ç, ğ, ı, ö, ü)
- ⚡ **High-performance** caching və optimization
- 🎯 **Type-safe** full TypeScript support
- 📦 **Zero dependencies**
- 🔄 **Cross-platform** (Browser, Node.js, Deno)

## Installation

```bash
npm install basekit-core-utils
# or
yarn add basekit-core-utils
# or
pnpm add basekit-core-utils
```

## Quick Start

```typescript
import { 
    capitalize, 
    slugify, 
    debounce, 
    memoize 
} from 'basekit-core-utils'

// String operations
const title = capitalize("salam dünya", "az-AZ") // "Salam Dünya"
const slug = slugify("Əsas səhifə!", "az-AZ") // "esas-sehife"

// Functional utilities
const search = debounce((query: string) => {
    // API call
}, 300)

const expensive = memoize((n: number) => {
    // Heavy calculation
    return n * n
})
```

## Documentation

### 📝 String Utils
[Metin əməliyyatları üçün documentation](./string-utils.md)

- **Text Transformation**: `capitalize`, `upper`, `lower`, `trim`
- **Text Cleaning**: `slugify`, `normalizeSpaces`, `removeNonAlphaNumeric`
- **Search & Compare**: `startsWithIgnoreCase`, `equalsIgnoreCase`, `compareLocale`
- **Text Analysis**: `isEmptyString`, `extractInitials`, `count`
- **String Manipulation**: `padLeft`, `padRight`, `reverse`, `truncate`
- **Transliteration**: Azərbaycan hərfləri üçün dəstək

### ⚡ Functional Utils
[Funksional proqramlaşdırma üçün documentation](./functional-utils.md)

- **Rate Limiting**: `debounce`, `throttle`
- **Memoization**: `memoize`, `memoizeAsync`
- **Function Composition**: `pipe`, `compose`
- **Async Utilities**: `delay`, `defer`, `once`, `onceAsync`
- **Error Handling**: `tryCatch`
- **Utilities**: `noop`, `identity`

## API Reference

### String Operations

#### Basic Examples
```typescript
import { capitalize, slugify, trim } from 'basekit-core-utils'

// Case transformation
capitalize("salam dünya", "az-AZ") // "Salam Dünya"
lower("SALAM", "az-AZ") // "salam"
upper("salam", "az-AZ") // "SALAM"

// Text cleaning
trim("  salam  ") // "salam"
slugify("Salam Dünya!", "az-AZ") // "salam-dunya"

// Unicode and locale support
startsWithIgnoreCase("Salam", "sa", "az-AZ") // true
compareLocale("çorba", "corba", "tr-TR") // 0
```

#### Azerbaijani Transliteration
```typescript
import { translitBase, extendTransliteration, slugify } from 'basekit-core-utils'

// Built-in support
slugify("Ən böyük şəhər", "az-AZ") // "en-boyuk-seher"

// Extend transliteration map
extendTransliteration({ "x": "kh", "q": "gh" })
```

### Functional Programming

#### Performance Examples
```typescript
import { debounce, memoize, pipe } from 'basekit-core-utils'

// Debounced API calls
const searchAPI = debounce(async (query: string) => {
    const results = await fetch(`/search?q=${query}`)
    return results.json()
}, 300)

// Memoized expensive functions
const fibonacci = memoize((n: number): number => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}, undefined, { maxSize: 50 })

// Function composition
const processText = pipe(
    (text: string) => text.trim(),
    (text: string) => text.toLowerCase(),
    (text: string) => text.replace(/\s+/g, "-")
)
```

## Performance

- 🚀 **Caching**: Segmenter və Collator obyektləri üçün LRU cache
- ⚡ **Optimized**: Grapheme-aware string processing
- 📊 **Memory efficient**: Size-limited cache with automatic cleanup

## Browser Support

- Chrome 67+
- Firefox 65+  
- Safari 14+
- Edge 79+
- Node.js 12+

## TypeScript Support

Full TypeScript typing included:

```typescript
import { Debounced, MemoizedFn } from 'basekit-core-utils'

interface SearchParams {
    query: string
    filters: string[]
}

const debouncedSearch: Debounced<(params: SearchParams) => Promise<any>> = 
    debounce((params) => api.search(params), 300)
```

## Examples

### Real-world Usage

#### Search Component
```typescript
import { useState } from 'react'
import { debounce, trim } from 'basekit-core-utils'

export function SearchInput() {
    const [results, setResults] = useState([])
    
    const handleSearch = debounce(async (query: string) => {
        const cleanQuery = trim(query)
        if (!cleanQuery) return
        
        const data = await fetch(`/search?q=${encodeURIComponent(cleanQuery)}`)
        setResults(await data.json())
    }, 300)
    
    return (
        <input 
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Axtar..."
        />
    )
}
```

#### Text Processing Pipeline
```typescript
import { pipe, normalizeSpaces, slugify, capitalize } from 'basekit-core-utils'

const processArticle = pipe(
    (text: string) => normalizeSpaces(text),
    (text: string) => capitalize(text, "az-AZ"),
    (text: string) => ({
        title: text,
        slug: slugify(text, "az-AZ", 50)
    })
)

const article = processArticle("   başlığın   adı   ")
// { title: "Başlığın Adı", slug: "basligin-adi" }
```

## Contributing

PR-lər həvəslə qarşılanır! Lütfən [CONTRIBUTING.md](./CONTRIBUTING.md) oxuyun.

## License

MIT License - [LICENSE](./LICENSE) faylına baxın.

## Links

- [String Utils Documentation](./string-utils.md)
- [Functional Utils Documentation](./functional-utils.md)
- [GitHub Repository](https://github.com/username/basekit-core-utils)
- [NPM Package](https://www.npmjs.com/package/basekit-core-utils)# basekit-core-docs
