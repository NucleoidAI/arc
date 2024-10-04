const _3aa6fb7a = {
  patterns:
    "### Logical Explanation of Patterns\n" +
    "\n" +
    "Upon examining the given dataset, we can identify a specific pattern in the transformation from the input matrix to the output matrix. The pattern involves the introduction of the number '1' in the output matrix at specific positions relative to the existing '8's in the input matrix.\n" +
    "\n" +
    "### Rules Found in Patterns\n" +
    "\n" +
    "1. **Introduction of '1':** \n" +
    "   - The number '1' is introduced in the output matrix adjacent to the '8's in the input matrix.\n" +
    "   - Specifically, '1' is placed in a position that is either directly above, below, or to the left of an '8' that is part of a vertical or horizontal line of '8's.\n" +
    "\n" +
    "2. **Positioning of '1':**\n" +
    "   - The '1' is placed in a position that was previously '0' in the input matrix.\n" +
    "   - The placement of '1' seems to be at the end of a line of '8's, either extending the line or marking a boundary.\n" +
    "\n" +
    "### Details of Found Shapes and Their Parts\n" +
    "\n" +
    "- **Lines of '8's:**\n" +
    "  - The input matrix contains lines of '8's, which can be either vertical or horizontal.\n" +
    "  - These lines are composed of consecutive '8's without interruption by other numbers.\n" +
    "\n" +
    "- **Introduction of '1':**\n" +
    "  - The '1' acts as an extension or boundary marker for these lines of '8's.\n" +
    "  - It is placed in a position that is adjacent to the line of '8's, either extending it or marking its end.\n" +
    "\n" +
    "### Summary of Findings\n" +
    "\n" +
    "The transformation from the input matrix to the output matrix involves a consistent pattern where the number '1' is introduced adjacent to lines of '8's. This introduction of '1' serves to either extend the line of '8's or mark its boundary. The placement of '1' is strategic, occurring in positions that were previously empty (denoted by '0') in the input matrix. This pattern is consistently applied across the given dataset, indicating a clear rule for transforming the input matrix into the output matrix.",
  declarations: [
    "class Obj { constructor(center) { this.center = center; } }",
    "if($Obj.center === 8) { $Obj.extension = true; }",
  ],
  training_instances: [
    {
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
      nuc: "var obj0 = new Obj(8); obj0;",
      instance_value: { id: "obj0", center: 8, extension: true },
    },
    {
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
      nuc: "var obj1 = new Obj(8); obj1.extension = true; obj1;",
      instance_value: { id: "obj1", center: 8, extension: true },
    },
    {
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
      nuc: "var obj2 = new Obj(8); obj2.extension = true; obj2;",
      instance_value: { id: "obj2", center: 8, extension: true },
    },
    {
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
      nuc: "var obj3 = new Obj(8); obj3.extension = true; obj3;",
      instance_value: { id: "obj3", center: 8, extension: true },
    },
    {
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
      nuc: "var obj4 = new Obj(8); obj4.extension = true; obj4;",
      instance_value: { id: "obj4", center: 8, extension: true },
    },
  ],
  instances: [
    {
      input_instance: [
        [0, 0, 0, 0, 0, 8, 8],
        [0, 0, 0, 0, 0, 0, 8],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
    },
    {
      input_instance: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 8, 0, 0, 0],
        [0, 0, 0, 8, 8, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
    },
    {
      input_instance: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 8, 0, 0, 0, 0, 0],
        [8, 8, 0, 0, 0, 0, 0],
      ],
    },
  ],
};

module.exports = { _3aa6fb7a };
