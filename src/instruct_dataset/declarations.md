## Declarations

- Identifying declarations for given input and output matrices in Nucleoid Syntax is creating `declarations` based on `input_matrix` and `ouput_matrix` in `nuc` language

Example 1:

```json
{
  "input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 7, 0, 0, 0, 7, 3],
    [0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 3, 7, 0, 0, 0],
    [0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "declarations": [
    "class Obj { constructor() { this.left = 0; this.right = 0; this.rear = 0; this.front = 0; }}",
    "if($Obj.left === 3 && $Obj.right === 3 && $Obj.rear === 3) { $Obj.front = 7; }"
  ]
}
```

Example 2:

```json
{
  "input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 9, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0],
    [0, 9, 9, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0],
    [0, 0, 0, 0, 0, 0, 9, 0]
  ],
  "output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 9, 0, 0],
    [0, 0, 0, 0, 9, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 2, 0, 0, 0, 0, 0],
    [0, 9, 9, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0],
    [0, 0, 0, 0, 0, 2, 9, 0]
  ],
  "identified_declarations": [
    "class Obj { constructor() { this.left = 0; this.right = 0; this.rear = 0; this.front = 0; }}",
    "if($Obj.left === 9 && $Obj.right === 9 && $Obj.rear === 9) { $Obj.front = 2; }"
  ]
}
```
