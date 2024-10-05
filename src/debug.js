const _3aa6fb7a = {
  patterns:
    "To analyze the patterns between the input_matrix and output_matrix in the given train_dataset, we need to identify any transformations or rules applied to the input_matrix to produce the output_matrix. Let's examine the provided matrices:\n" +
    "\n" +
    "### Pattern Analysis:\n" +
    "\n" +
    "1. **Observation of Changes:**\n" +
    "   - In both examples, the number '8' is present in both the input and output matrices, forming specific shapes or lines.\n" +
    "   - The transformation involves the addition of the number '1' in specific positions in the output_matrix.\n" +
    "\n" +
    "2. **Rule Identification:**\n" +
    "   - **Rule 1:** The number '1' is added adjacent to the number '8' in the output_matrix.\n" +
    "   - **Rule 2:** The number '1' is placed in a position where it is directly next to an '8' that is part of a vertical or horizontal line of '8's.\n" +
    "\n" +
    "3. **Shape and Structure:**\n" +
    "   - The number '8' forms lines or segments in the input_matrix.\n" +
    "   - The number '1' is added to extend or highlight these lines in the output_matrix.\n" +
    "\n" +
    "### Detailed Analysis of Each Example:\n" +
    "\n" +
    "- **First Example:**\n" +
    "  - **Input Matrix:**\n" +
    "    ```\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,8,0,0,0,0,0]\n" +
    "    [0,8,8,0,0,0,0]\n" +
    "    [0,0,0,0,8,8,0]\n" +
    "    [0,0,0,0,0,8,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    ```\n" +
    "  - **Output Matrix:**\n" +
    "    ```\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,8,1,0,0,0,0]\n" +
    "    [0,8,8,0,0,0,0]\n" +
    "    [0,0,0,0,8,8,0]\n" +
    "    [0,0,0,0,1,8,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    ```\n" +
    "  - **Transformation:** The number '1' is added to the right of the first '8' in the second row and to the left of the '8' in the fifth row.\n" +
    "\n" +
    "- **Second Example:**\n" +
    "  - **Input Matrix:**\n" +
    "    ```\n" +
    "    [0,0,0,0,8,8,0]\n" +
    "    [0,0,0,0,0,8,0]\n" +
    "    [0,0,8,0,0,0,0]\n" +
    "    [0,0,8,8,0,0,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,0,0,0,8,0,0]\n" +
    "    [0,0,0,8,8,0,0]\n" +
    "    ```\n" +
    "  - **Output Matrix:**\n" +
    "    ```\n" +
    "    [0,0,0,0,8,8,0]\n" +
    "    [0,0,0,0,1,8,0]\n" +
    "    [0,0,8,1,0,0,0]\n" +
    "    [0,0,8,8,0,0,0]\n" +
    "    [0,0,0,0,0,0,0]\n" +
    "    [0,0,0,1,8,0,0]\n" +
    "    [0,0,0,8,8,0,0]\n" +
    "    ```\n" +
    "  - **Transformation:** The number '1' is added to the left of the '8' in the second row, to the right of the '8' in the third row, and to the left of the '8' in the sixth row.\n" +
    "\n" +
    "### Summary of Findings:\n" +
    "\n" +
    "- The transformation from input_matrix to output_matrix involves adding the number '1' adjacent to existing '8's.\n" +
    "- The placement of '1' is strategic, often extending or highlighting the line of '8's.\n" +
    "- The rule is consistent across both examples, indicating a clear pattern of transformation.\n" +
    "\n" +
    "These observations and rules can be used to predict or generate the output_matrix from a given input_matrix following the identified pattern.",
  training_dataset: {
    dataset: [
      {
        input_matrix: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 8, 0, 0, 0, 0, 0],
          [0, 8, 8, 0, 0, 0, 0],
          [0, 0, 0, 0, 8, 8, 0],
          [0, 0, 0, 0, 0, 8, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ],
        output_matrix: [
          [0, 0, 0, 0, 0, 0, 0],
          [0, 8, 1, 0, 0, 0, 0],
          [0, 8, 8, 0, 0, 0, 0],
          [0, 0, 0, 0, 8, 8, 0],
          [0, 0, 0, 0, 1, 8, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
        ],
        instances: [
          {
            instance_name: "obj0",
            input_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 8, 0, 0, 0, 0, 0],
              [0, 8, 8, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            output_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 8, 1, 0, 0, 0, 0],
              [0, 8, 8, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            nuc: "var obj0 = new Obj(); obj0.center = 8; obj0.left = 8; obj0.right = 8; obj0;",
            instance_value: {
              id: "obj0",
              center: 8,
              left: 8,
              right: 8,
              extension: 1,
            },
          },
          {
            instance_name: "obj1",
            input_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 8, 8, 0],
              [0, 0, 0, 0, 0, 8, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            output_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 8, 8, 0],
              [0, 0, 0, 0, 1, 8, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            nuc: "var obj1 = new Obj(); obj1.center = 8; obj1.left = 8; obj1.right = 8; obj1;",
            instance_value: {
              id: "obj1",
              center: 8,
              left: 8,
              right: 8,
              extension: 1,
            },
          },
        ],
      },
      {
        input_matrix: [
          [0, 0, 0, 0, 8, 8, 0],
          [0, 0, 0, 0, 0, 8, 0],
          [0, 0, 8, 0, 0, 0, 0],
          [0, 0, 8, 8, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 0, 8, 0, 0],
          [0, 0, 0, 8, 8, 0, 0],
        ],
        output_matrix: [
          [0, 0, 0, 0, 8, 8, 0],
          [0, 0, 0, 0, 1, 8, 0],
          [0, 0, 8, 1, 0, 0, 0],
          [0, 0, 8, 8, 0, 0, 0],
          [0, 0, 0, 0, 0, 0, 0],
          [0, 0, 0, 1, 8, 0, 0],
          [0, 0, 0, 8, 8, 0, 0],
        ],
        instances: [
          {
            instance_name: "obj0",
            input_instance: [
              [0, 0, 0, 0, 8, 8, 0],
              [0, 0, 0, 0, 0, 8, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            output_instance: [
              [0, 0, 0, 0, 8, 8, 0],
              [0, 0, 0, 0, 1, 8, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            nuc: "var obj0 = new Obj(); obj0.center = 8; obj0.left = 8; obj0.right = 8; obj0;",
            instance_value: {
              id: "obj0",
              center: 8,
              left: 8,
              right: 8,
              extension: 1,
            },
          },
          {
            instance_name: "obj1",
            input_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 8, 0, 0, 0, 0],
              [0, 0, 8, 8, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            output_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 8, 1, 0, 0, 0],
              [0, 0, 8, 8, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
            ],
            nuc: "var obj1 = new Obj(); obj1.center = 8; obj1.left = 8; obj1.right = 8; obj1;",
            instance_value: {
              id: "obj1",
              center: 8,
              left: 8,
              right: 8,
              extension: 1,
            },
          },
          {
            instance_name: "obj2",
            input_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 8, 0, 0],
              [0, 0, 0, 8, 8, 0, 0],
            ],
            output_instance: [
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
              [0, 0, 0, 1, 8, 0, 0],
              [0, 0, 0, 8, 8, 0, 0],
            ],
            nuc: "var obj2 = new Obj(); obj2.center = 8; obj2;",
            instance_value: {
              id: "obj2",
              center: 8,
              left: 0,
              right: 0,
              extension: 1,
            },
          },
        ],
      },
    ],
    declarations: [
      "class Obj { constructor() { this.center = 0; this.left = 0; this.right = 0; this.extension = 0; }}",
      "if($Obj.center === 8) { $Obj.extension = 1; }",
    ],
  },
};

module.exports = { _3aa6fb7a };
