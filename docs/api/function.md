# Function Utilities

Helpers for controlling function execution and composition.

## `debounce`

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

```typescript
import { debounce } from 'basekit-core'

const save = debounce((text) => {
  console.log('Saving:', text)
}, 500)

save('Hi')
save('Hello')
// ...500ms later...
// Logs: "Saving: Hello"
```

### Options
- `leading`: Execute on the leading edge.
- `trailing`: Execute on the trailing edge (default: true).
- `maxWait`: Maximum time to wait before forcing execution.

---

## `throttle`

Creates a throttled function that only invokes `func` at most once per every `wait` milliseconds.

```typescript
import { throttle } from 'basekit-core'

const onScroll = throttle(() => {
  updateLayout()
}, 100)
```

---

## `memoize`

Memoizes the result of a function based on its arguments.

```typescript
import { memoize } from 'basekit-core'

const expensive = memoize((n) => {
  // heavy computation
  return n * 2
})

expensive(5) // Computed
expensive(5) // Cached
```

---

## `once`

Ensures a function is only called once. Subsequent calls return the result of the first call.

```typescript
import { once } from 'basekit-core'

const initialize = once(() => {
  console.log('Initialized!')
})

initialize() // "Initialized!"
initialize() // (no output)
```

---

## `pipe`

Performs left-to-right function composition.

```typescript
import { pipe } from 'basekit-core'

const add = (n) => n + 1
const double = (n) => n * 2

const addThenDouble = pipe(add, double)
addThenDouble(5) // (5 + 1) * 2 = 12
```

---

## `tryCatch`

Wraps a function in a try/catch block. If it throws, it returns `undefined` (and optionally calls an error handler).

```typescript
import { tryCatch } from 'basekit-core'

const safeParse = tryCatch(JSON.parse)
const result = safeParse('invalid json') // undefined (no crash)
```

---

## `delay`

Returns a promise that resolves after `ms` milliseconds.

```typescript
import { delay } from 'basekit-core'

await delay(1000)
console.log('1 second passed')
```
