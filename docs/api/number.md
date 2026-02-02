# Number Utilities

## `clamp`

Clamps a number within the inclusive lower and upper bounds.

```typescript
import { clamp } from 'basekit-core'

clamp(10, 0, 5) // 5
clamp(-5, 0, 5) // 0
clamp(3, 0, 5) // 3
```

## `random`

Returns a random number between the inclusive lower and upper bounds.

```typescript
import { random } from 'basekit-core'

random(0, 100) // e.g. 42.5
```
