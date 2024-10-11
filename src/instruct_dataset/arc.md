# ARC

- ARC consists of input_matrix and output_matrix
- ARC matrix refers either to input_matrix or output_matrix
- ARC matrix is rectangular, 2-dimensional arrays represented as sparse:

- Dimensions of ARC input matrix and output matrix are the same size
- ARC matrix is in JSON format
- In ARC matrix, any number from 1-9 can be used for object, 0 considered empty space

In train_dataset and instruct_dataset:
- input_matrix is inserted matrix
- output_matrix is converted matrix from inserted matrix
- input_instance contains an instance in input_matrix based on found pattern in between input_matrix and output_matrix
- input_instance must contain only 1 instance of found pattern
- input_instance must be filled rest of empty spaces with 0s
- input_instance must have in same dimension with its input_matrix
- output_instance contains a corresponding instance in output_matrix based on found pattern in between input_matrix and output_matrix
- output_instance must contain only 1 instance of found pattern
- output_instance must be filled rest of empty spaces with 0s
- output_instance must have in same dimension with its output_matrix
- input_code is object representation of input_instance
- output_value is object representation of output_instance

## Declarations

- Identifying declarations for given train_dataset Nucleoid Syntax is creating `declarations` based on `input_matrix` and `ouput_matrix` in `nuc` language

## Instances

- Extracting each input_instance from given input_matrix based on given declarative statements in declarations is creating array of `input_instance` for given input _matrix and Nucleoid code as `nuc`
- Extracting each output_instance from given output_matrix based on given declarative statements in declarations is creating array of `output_instance` for given output_matrix and Nucleoid code as `nuc`
- Finding output instance from given output matrix for given input instance based on declarations is creating `output_instance` for `input_instance` from `output_matrix` based on `declarations`
- Drawing output instance from given input instance is creating `output_instance` with given `input_instance` and `output_value`
