# Array Utilities

Utilities for working with arrays.

## `unique`

Returns a new array with duplicate values removed.

```typescript
import { unique } from 'basekit-core'

unique([1, 2, 2, 3]) // [1, 2, 3]
```

## `chunk`

Creates an array of elements split into groups the length of `size`.

```typescript
import { chunk } from 'basekit-core'

chunk(['a', 'b', 'c', 'd'], 2) // [['a', 'b'], ['c', 'd']]
chunk(['a', 'b', 'c', 'd'], 3) // [['a', 'b', 'c'], ['d']]
```
