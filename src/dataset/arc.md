# ARC

- ARC consists of input matrix and output matrix
- ARC matrix refers either to input matrix or output matrix
- ARC matrix is rectangular, 2-dimensional arrays
- Dimensions of ARC input matrix and output matrix are the same size
- ARC matrix is in JSON format

## Declarations

- Identifying declarations for given input and output matrices in Nucleoid Syntax

Example 1:

```json
{
  "given_input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 3, 0, 0, 0, 0],
    [0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "given_output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 3, 0, 0, 0, 0, 0],
    [0, 3, 7, 0, 0, 0, 7, 3],
    [0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 3, 7, 0, 0, 0],
    [0, 0, 0, 3, 3, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "identified_declarations": [
    "class Obj { constructor() { this.left = 0; this.right = 0; this.rear = 0; this.front = 0; }}",
    "if($Obj.left === 3 && $Obj.right === 3 && $Obj.rear === 3) { $Obj.front = 7; }"
  ]
}
```

Example 2:

```json
{
  "given_input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 9, 9, 0, 0],
    [0, 0, 0, 0, 9, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0],
    [0, 9, 9, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 9, 9, 0],
    [0, 0, 0, 0, 0, 0, 9, 0]
  ],
  "given_output_matrix": [
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

## Instances

- Extracting input instances based on declarations is creating array of `input_instance` for given input matrix and Nucleoid code as `nuc`
- Finding output instance from given output matrix for given input instance based on declarations is creating `output_instance` for `input_instance` from `given_output_matrix` based on `declarations`
- Drawing output instance from given input instance is creating `output_instance` with given `input_instance` and `instance_value`

Example 1:

```json
{
  "declarations": [
    "class Obj { constructor() { this.left = 0; this.right = 0; this.rear = 0; this.front = 0; }}", 
    "if($Obj.left === 6 && $Obj.right === 6 && $Obj.rear === 6) { $Obj.front = 8; }"
  ],
  "given_input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 6, 0],
    [0, 0, 0, 0, 0, 6, 6, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 6, 0, 0, 0, 0, 0],
    [0, 0, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "given_output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 8, 6, 0],
    [0, 0, 0, 0, 0, 6, 6, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 6, 8, 0, 0, 0, 0],
    [0, 0, 6, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "instances": [
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 6, 0],
        [0, 0, 0, 0, 0, 6, 6, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 8, 6, 0],
        [0, 0, 0, 0, 0, 6, 6, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj1 = new Obj(); obj1.left = 6; obj1.right = 6; obj1.rear = 6; obj1;",
      "instance_value": {"id":"obj1","left":6,"right":6,"rear":6,"front":8}
    },
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 6, 0, 0, 0, 0, 0],
        [0, 0, 6, 6, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 6, 8, 0, 0, 0, 0],
        [0, 0, 6, 6, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj2 = new Obj(); obj2.left = 6; obj2.right = 6; obj2.rear = 6; obj2;",
      "instance_value": {"id":"obj2","left":6,"right":6,"rear":6,"front":8}
    }
  ]
}
```

Example 2:

```json
{
  "given_input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "given_output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 2, 1, 0, 0, 0, 0],
    [0, 0, 1, 1, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 2, 1, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "instances": [
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 2, 1, 0, 0, 0, 0],
        [0, 0, 1, 1, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj3 = new Obj(); obj3.left = 3; obj3.right = 3; obj3.rear = 3; obj3;",
      "instance_value": {"id":"obj3","left":3,"right":3,"rear":3,"front":7}
    },
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 0, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 1, 1, 0],
        [0, 0, 0, 0, 0, 2, 1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj4 = new Obj(); obj4.left = 1; obj4.right = 1; obj4.rear = 1; obj4;",
      "instance_value": {"id":"obj4","left":1,"right":1,"rear":1,"front":2}
    }
  ]
}
```

Example 3:

```json
{
  "given_input_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 9, 9],
    [0, 0, 0, 0, 0, 0, 0, 9],
    [0, 0, 0, 9, 0, 0, 0, 0],
    [0, 0, 0, 9, 9, 0, 0, 0],
    [0, 9, 9, 0, 0, 0, 0, 0],
    [0, 9, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "given_output_matrix": [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 9, 9],
    [0, 0, 0, 0, 0, 0, 1, 9],
    [0, 0, 0, 9, 1, 0, 0, 0],
    [0, 0, 0, 9, 9, 0, 0, 0],
    [0, 9, 9, 0, 0, 0, 0, 0],
    [0, 9, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
  ],
  "instances": [
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 9],
        [0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 9],
        [0, 0, 0, 0, 0, 0, 1, 9],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj5 = new Obj(); obj5.left = 9; obj5.right = 9; obj5.rear = 9; obj5;",
      "instance_value": {"id":"obj5","left":9,"right":9,"rear":9,"front":1}
    },
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 0, 0, 0, 0],
        [0, 0, 0, 9, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 9, 1, 0, 0, 0],
        [0, 0, 0, 9, 9, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj6 = new Obj(); obj6.left = 9; obj6.right = 9; obj6.rear = 9; obj6;",
      "instance_value": {"id":"obj6","left":9,"right":9,"rear":9,"front":1}
    },
    {
      "input_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 9],
        [0, 0, 0, 0, 0, 0, 0, 9],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "output_instance": [
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 9, 9],
        [0, 0, 0, 0, 0, 0, 1, 9],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0]
      ],
      "nuc": "var obj7 = new Obj(); obj7.left = 9; obj7.right = 9; obj7.rear = 9; obj7;",
      "instance_value": {"id":"obj7","left":9,"right":9,"rear":9,"front":1}
    }
  ]
}
```

- Instances can be rotational when needed

```json
{
  "instances": [
    [
      [1, 7],
      [7, 7]
    ],
    [
      [7, 1],
      [7, 7]
    ],
    [
      [7, 7],
      [1, 7]
    ],
    [
      [7, 7],
      [7, 1]
    ]
  ]
}
```
