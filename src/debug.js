const _3aa6fb7a = {
  dataset: [
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
          input_object: {
            x_position: 4,
            y_position: 0,
            object_matrix: [
              [8, 8],
              [0, 8],
            ],
          },
          output_object: {
            x_position: 4,
            y_position: 0,
            object_matrix: [
              [8, 8],
              [1, 8],
            ],
          },
          input_code: "var obj0 = new Obj(); obj0.vertex = 8; obj0;",
          output_value: {
            id: "obj0",
            shape: "label1111",
            vertex: 8,
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
          input_object: {
            x_position: 2,
            y_position: 2,
            object_matrix: [
              [8, 0],
              [8, 8],
            ],
          },
          output_object: {
            x_position: 2,
            y_position: 2,
            object_matrix: [
              [8, 1],
              [8, 8],
            ],
          },
          input_code:
            "'use declarative';\n\nclass Obj {\n  constructor() {\n    this.shape = 'label0000';\n    this.vertex = 0;\n    this.extension = 0;\n  }\n}\n\nif($Obj.vertex === 8) {\n  $Obj.shape = 'label1111';\n  $Obj.extension = 1;\n}\n\n'use imperative';\n\nvar obj1 = new Obj();\nobj1.vertex = 8;\nobj1;",
          output_value: {
            id: "obj1",
            shape: "label1111",
            vertex: 8,
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
          input_object: {
            x_position: 3,
            y_position: 5,
            object_matrix: [
              [0, 8],
              [8, 8],
            ],
          },
          output_object: {
            x_position: 3,
            y_position: 5,
            object_matrix: [
              [1, 8],
              [8, 8],
            ],
          },
          input_code: "var obj2 = new Obj(); obj2.vertex = 8; obj2;",
          output_value: {
            id: "obj2",
            shape: "label1111",
            vertex: 8,
            extension: 1,
          },
        },
      ],
    },
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
          input_object: {
            x_position: 1,
            y_position: 1,
            object_matrix: [
              [8, 0],
              [8, 8],
            ],
          },
          output_object: {
            x_position: 1,
            y_position: 1,
            object_matrix: [
              [8, 1],
              [8, 8],
            ],
          },
          input_code:
            "'use imperative';\n\nvar obj0 = new Obj();\nobj0.vertex = 8;\nobj0;",
          output_value: {
            id: "obj0",
            shape: "label1111",
            vertex: 8,
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
          input_object: {
            x_position: 4,
            y_position: 3,
            object_matrix: [
              [8, 8],
              [0, 8],
            ],
          },
          output_object: {
            x_position: 4,
            y_position: 3,
            object_matrix: [
              [8, 8],
              [1, 8],
            ],
          },
          input_code:
            "'use declarative';\n\nclass Obj {\n  constructor() {\n    this.shape = 'label0000';\n    this.vertex = 0;\n    this.extension = 0;\n  }\n}\n\nif($Obj.vertex === 8) {\n  $Obj.shape = 'label1111';\n  $Obj.extension = 1;\n}\n\n'use imperative';\n\nvar obj1 = new Obj();\nobj1.vertex = 8;\nobj1;",
          output_value: {
            id: "obj1",
            shape: "label1111",
            vertex: 8,
            extension: 1,
          },
        },
      ],
    },
  ],
  declarations: [
    "class Obj { constructor() { this.shape = 'label0000'; this.vertex = 0; this.extension = 0; }}",
    "if($Obj.vertex === 8) { $Obj.shape = 'label1111'; $Obj.extension = 1; }",
  ],
};

module.exports = { _3aa6fb7a };
