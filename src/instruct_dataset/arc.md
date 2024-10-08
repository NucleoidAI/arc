# ARC

- ARC consists of input_matrix and output_matrix
- ARC matrix refers either to input_matrix or output_matrix
- ARC matrix is rectangular, 2-dimensional arrays represented as sparse:

Sparse:
- `1@3,2` Number 1 at 3 x-coordinate and 2 y-coordinate
- `-` is delimiter for next entry
- `0` is considered as empty space
```json
{
  "matrix": "1@3,2-1@4,2-7@3,3-7@3,4"
}
```
- Dimensions of ARC input matrix and output matrix are the same size
- ARC matrix is in JSON format
- In ARC matrix, any number from 1-9 can be used for object, 0 considered empty space
