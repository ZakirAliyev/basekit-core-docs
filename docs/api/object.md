# Object Utilities

Utilities for working with objects.

## `deepClone`

Creates a deep clone of the value. Handles nested objects and arrays.

```typescript
import { deepClone } from 'basekit-core'

const original = { a: { b: 2 } }
const copy = deepClone(original)

copy.a.b = 5
console.log(original.a.b) // 2 (unchanged)
```

## `merge`

Deeply merges two objects.

```typescript
import { merge } from 'basekit-core'

const a = { x: 1, y: { z: 2 } }
const b = { y: { z: 3, w: 4 } }

merge(a, b) // { x: 1, y: { z: 3, w: 4 } }
```

## `isEmpty`

Checks if a value is empty (empty string, empty array, empty object, null, or undefined).

```typescript
import { isEmpty } from 'basekit-core'

isEmpty(null) // true
isEmpty([]) // true
isEmpty({}) // true
isEmpty("") // true
isEmpty([1]) // false
```
