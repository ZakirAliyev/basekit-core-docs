# Functional Utils Documentation

## Overview
A comprehensive collection of functional programming utilities including debounce, throttle, memoize, pipe, compose and more.

## Import
```typescript
import {
    debounce,
    throttle,
    memoize,
    memoizeAsync,
    pipe,
    compose,
    once,
    delay,
    defer,
    tryCatch
} from './functional-utils'
```

## Functions

### Timing & Async Operations

#### `delay(ms)`
Waits for specified milliseconds.
```typescript
await delay(1000) // Wait 1 second
```

#### `defer(fn)`
Executes function on next frame.
```typescript
defer(() => console.log("Next frame"))
```

### Function Control

#### `once(fn)`
Executes function only once.
```typescript
const init = once(() => console.log("Once"))
init() // "Once"
init() // Nothing
```

#### `onceAsync(fn)`
Executes async function only once, returns same Promise.
```typescript
const fetchOnce = onceAsync(async () => {
    const data = await fetch('/api')
    return data.json()
})

const promise1 = fetchOnce()
const promise2 = fetchOnce() // Same Promise
```

#### `tryCatch(fn, onError?)`
Creates error-catching function wrapper.
```typescript
const safeParse = tryCatch(JSON.parse, (err) => console.error("Parse error", err))

safeParse('{"valid": true}') // {valid: true}
safeParse('invalid json') // undefined, error logged
```

### Rate Limiting

#### `debounce(fn, wait?, options?)`
Delays function execution to prevent multiple calls in quick succession.

```typescript
const search = debounce((query: string) => {
    console.log("Search:", query)
}, 300)

search("a")
search("ab") 
search("abc") // Only "abc" will be logged
```

Options:
- `leading?: boolean` - Execute first call immediately
- `trailing?: boolean` - Execute last call (default: true)
- `maxWait?: number` - Maximum wait time

#### `throttle(fn, wait?, options?)`
Limits function execution to once per specified interval.

```typescript
const scroll = throttle((event: Event) => {
    console.log("Scroll event")
}, 100)

// Will execute at most once per 100ms during scroll
```

Options:
- `leading?: boolean` - Execute first call immediately (default: true)
- `trailing?: boolean` - Execute last call (default: true)

### Memoization

#### `memoize(fn, keyResolver?, options?)`
Caches function results.

```typescript
const expensive = memoize((n: number) => {
    console.log("Calculating...")
    return n * 2
})

expensive(5) // "Calculating..." → 10
expensive(5) // From cache → 10
expensive(6) // "Calculating..." → 12
```

Custom key resolver:
```typescript
const memoized = memoize(
    (a: number, b: number) => a + b,
    (a, b) => `${a}-${b}` // Custom cache key
)
```

Options:
- `maxSize?: number` - Cache size limit (LRU eviction)

#### `memoizeAsync(fn, keyResolver?, options?)`
Memoization for async functions. Cache auto-clears on errors.

```typescript
const fetchData = memoizeAsync(async (id: string) => {
    const response = await fetch(`/api/data/${id}`)
    return response.json()
})

const data1 = await fetchData("123")
const data2 = await fetchData("123") // Same Promise
```

Cache operations:
```typescript
memoized.cache // Cache Map
memoized.clear() // Clear all cache
memoized.delete(key) // Delete specific key
```

### Function Composition

#### `pipe(...fns)`
Composes functions left-to-right.
```typescript
const process = pipe(
    (x: string) => x.trim(),
    (x: string) => x.toLowerCase(),
    (x: string) => x.replace(/\s+/g, "-")
)

process("  Hello World  ") // "hello-world"
```

#### `compose(...fns)`
Composes functions right-to-left.
```typescript
const process = compose(
    (x: string) => x.replace(/\s+/g, "-"),
    (x: string) => x.toLowerCase(),
    (x: string) => x.trim()
)

process("  Hello World  ") // "hello-world"
```

### Utility Functions

#### `noop()`
No-operation function.
```typescript
const callback = options?.callback || noop
```

#### `identity<T>(x)`
Returns the input value unchanged.
```typescript
[1, 2, 3].map(identity) // [1, 2, 3]
```

## Types

### `AnyFn`
```typescript
type AnyFn = (...args: any[]) => any
```

### `Debounced<T>`
```typescript
type Debounced<T extends AnyFn> = ((...args: Parameters<T>) => ReturnType<T> | undefined) & {
    cancel: () => void
    flush: () => ReturnType<T> | undefined
    pending: () => boolean
}
```

### `Throttled<T>`
```typescript
type Throttled<T extends AnyFn> = ((...args: Parameters<T>) => ReturnType<T> | undefined) & {
    cancel: () => void
    flush: () => ReturnType<T> | undefined
    pending: () => boolean
}
```

## Usage Examples

### API Request with Debounce
```typescript
const searchAPI = debounce(async (query: string) => {
    const results = await fetch(`/search?q=${encodeURIComponent(query)}`)
    return results.json()
}, 300)

// Call on every input change
searchInput.addEventListener('input', (e) => {
    searchAPI(e.target.value)
})
```

### Expensive Calculation with Memoize
```typescript
const fibonacci = memoize((n: number): number => {
    if (n <= 1) return n
    return fibonacci(n - 1) + fibonacci(n - 2)
}, (n) => n, { maxSize: 100 })
```

### Data Processing Pipeline
```typescript
const processUsers = pipe(
    (users: User[]) => users.filter(u => u.active),
    (users: User[]) => users.sort((a, b) => a.name.localeCompare(b.name)),
    (users: User[]) => users.map(u => ({ id: u.id, name: u.name }))
)

const result = processUsers(rawUsers)
```

## Features

- **Type Safety**: Full TypeScript support
- **Performance**: Efficient caching and rate limiting
- **Memory Management**: LRU cache with size limits
- **Error Handling**: Built-in error catching and recovery
- **Cross-platform**: Browser and Node.js compatible