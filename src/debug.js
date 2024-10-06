const _3aa6fb7a = {
  patterns:
    "To analyze the given train dataset, we need to identify patterns and transformations between the input_matrix and output_matrix. Let's break down each example:\n" +
    "\n" +
    "### Example 1:\n" +
    "\n" +
    "**Input Matrix:**\n" +
    "```\n" +
    "[[0,0,0,0,0,0,0],\n" +
    " [0,8,0,0,0,0,0],\n" +
    " [0,8,8,0,0,0,0],\n" +
    " [0,0,0,0,8,8,0],\n" +
    " [0,0,0,0,0,8,0],\n" +
    " [0,0,0,0,0,0,0],\n" +
    " [0,0,0,0,0,0,0]]\n" +
    "```\n" +
    "\n" +
    "**Output Matrix:**\n" +
    "```\n" +
    "[[0,0,0,0,0,0,0],\n" +
    " [0,8,1,0,0,0,0],\n" +
    " [0,8,8,0,0,0,0],\n" +
    " [0,0,0,0,8,8,0],\n" +
    " [0,0,0,0,1,8,0],\n" +
    " [0,0,0,0,0,0,0],\n" +
    " [0,0,0,0,0,0,0]]\n" +
    "```\n" +
    "\n" +
    "**Analysis:**\n" +
    "- The input matrix contains two distinct clusters of the number '8'.\n" +
    "- In the output matrix, a '1' is added adjacent to the first '8' in the first cluster (at position [1,2]) and adjacent to the last '8' in the second cluster (at position [4,4]).\n" +
    "\n" +
    "### Example 2:\n" +
    "\n" +
    "**Input Matrix:**\n" +
    "```\n" +
    "[[0,0,0,0,8,8,0],\n" +
    " [0,0,0,0,0,8,0],\n" +
    " [0,0,8,0,0,0,0],\n" +
    " [0,0,8,8,0,0,0],\n" +
    " [0,0,0,0,0,0,0],\n" +
    " [0,0,0,0,8,0,0],\n" +
    " [0,0,0,8,8,0,0]]\n" +
    "```\n" +
    "\n" +
    "**Output Matrix:**\n" +
    "```\n" +
    "[[0,0,0,0,8,8,0],\n" +
    " [0,0,0,0,1,8,0],\n" +
    " [0,0,8,1,0,0,0],\n" +
    " [0,0,8,8,0,0,0],\n" +
    " [0,0,0,0,0,0,0],\n" +
    " [0,0,0,1,8,0,0],\n" +
    " [0,0,0,8,8,0,0]]\n" +
    "```\n" +
    "\n" +
    "**Analysis:**\n" +
    "- The input matrix contains three distinct clusters of the number '8'.\n" +
    "- In the output matrix, a '1' is added adjacent to the first '8' in the first cluster (at position [1,4]), adjacent to the first '8' in the second cluster (at position [2,3]), and adjacent to the first '8' in the third cluster (at position [5,3]).\n" +
    "\n" +
    "### Patterns and Rules:\n" +
    "\n" +
    "1. **Cluster Identification:**\n" +
    "   - The number '8' forms clusters in the input matrix. A cluster is defined as a group of '8's that are connected either horizontally or vertically.\n" +
    "\n" +
    "2. **Transformation Rule:**\n" +
    "   - For each cluster of '8's, a '1' is added adjacent to the first '8' in the cluster. The '1' is placed in the first available empty space (0) adjacent to the '8'.\n" +
    "\n" +
    "3. **Placement of '1':**\n" +
    "   - The '1' is placed in the first available position when traversing the matrix from top to bottom and left to right.\n" +
    "\n" +
    "### Shapes and Formal Names:\n" +
    "\n" +
    '- **Clusters of \'8\':** These can be considered as "rectangular blocks" or "connected components" in the matrix.\n' +
    "- **Addition of '1':** The '1' acts as a \"marker\" or \"indicator\" adjacent to the cluster.\n" +
    "\n" +
    "### Summary:\n" +
    "\n" +
    "The transformation from the input_matrix to the output_matrix involves identifying clusters of the number '8' and adding a '1' adjacent to the first '8' in each cluster. The '1' is placed in the first available empty space adjacent to the '8', following a top-to-bottom, left-to-right traversal. This pattern is consistent across the examples provided.",
  train_dataset: {
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
            nuc: "var obj0 = new Obj(); obj0.cluster = 8; obj0;",
            instance_value: { id: "obj0", cluster: 8, marker: 1 },
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
            nuc: "var obj1 = new Obj(); obj1.cluster = 8; obj1;",
            instance_value: { id: "obj1", cluster: 8, marker: 1 },
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
            nuc: "var obj0 = new Obj(); obj0.cluster = 8; obj0;",
            instance_value: { id: "obj0", cluster: 8, marker: 1 },
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
            nuc: "var obj1 = new Obj(); obj1.cluster = 8; obj1;",
            instance_value: { id: "obj1", cluster: 8, marker: 1 },
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
            nuc: "var obj2 = new Obj(); obj2.cluster = 8; obj2;",
            instance_value: { id: "obj2", cluster: 8, marker: 1 },
          },
        ],
      },
    ],
    declarations: [
      "class Obj { constructor() { this.cluster = 0; this.marker = 0; }}",
      "if($Obj.cluster === 8) { $Obj.marker = 1; }",
    ],
  },
};

module.exports = { _3aa6fb7a };
