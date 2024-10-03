## Instances

- Extracting input instances based on declarations is creating array of `input_instance` for given input matrix and Nucleoid code as `nuc`
- Finding output instance from given output matrix for given input instance based on declarations is creating `output_instance` for `input_instance` from `output_matrix` based on `declarations`
- Drawing output instance from given input instance is creating `output_instance` with given `input_instance` and `instance_value`

- Instances can be rotational when needed:

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
