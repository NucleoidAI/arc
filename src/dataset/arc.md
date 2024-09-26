# ARC

- ARC consists of input matrix and output matrix
- ARC matrix refers either to input matrix or output matrix
- ARC matrix is rectangular, 2-dimensional arrays
- Dimensions of ARC input matrix and output matrix are the same size
- ARC matrix is in JSON format

## Declarations

```nuc
class Obj {
    constructor() {
        this.left = 0;
        this.right = 0;
        this.rear = 0;
        this.front = 0;
    }
}
```

```nuc
if($Obj.left === 1 && $Obj.right === 1 && $Obj.rear === 1) {
  $Obj.front = 8;
}
```

## Instances

```json
{
  "arc": [
    [1, 1],
    [8, 1]
  ],
  "nuc": "var obj1 = new Obj();\nobj1.left = 1;\nobj1.right = 1;\nobj1.rear = 1;\nobj1.front = 8;"
}
```

```json
{
  "arc": [
    [1, 8],
    [1, 1]
  ],
  "nuc": "var obj3 = new Obj();\nobj3.left = 1;\nobj3.right = 1;\nobj3.rear = 1;\nobj3.front = 8;"
}
```

```json
{
  "arc": [
    [1, 1],
    [1, 8]
  ],
  "nuc": "var obj2 = new Obj();\nobj2.left = 1;\nobj2.right = 1;\nobj2.rear = 1;\nobj2.front = 8;"
}
```

### Extracting instances from ARC Matrix

Example 1:

Original ARC Matrix:

```json
[
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 8, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 8, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
]
```

Instance #1 in the ARC Matrix

```json
{
  "arc": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 8, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "nuc": "var obj1 = new Obj(); obj1.left = 1; obj1.right = 1; obj1.rear = 1; obj1.front = 8;"
}
```

Instance #2 in the ARC Matrix

```json
{
  "arc": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 8, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "nuc": "var obj2 = new Obj(); obj2.left = 1; obj2.right = 1; obj2.rear = 1; obj2.front = 8;"
}
```

Example 2:

Original ARC Matrix:

```json
[
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 8, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 8]
]
```

Instance #1 in the ARC Matrix

```json
{
  "arc": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 8, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "nuc": "var obj1 = new Obj(); obj1.left = 1; obj1.right = 1; obj1.rear = 1; obj1.front = 8;"
}
```

Instance #2 in the ARC Matrix

```json
{
  "arc": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 1, 8]
  ],
  "nuc": "var obj2 = new Obj(); obj2.left = 1; obj2.right = 1; obj2.rear = 1; obj2.front = 8;"
}
```
