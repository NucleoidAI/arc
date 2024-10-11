const _3aa6fb7a = {
  analyzer: {
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
            input_code: "'use imperative'; var obj0 = new Obj(8, 8, 8); obj0;",
            output_value: {
              id: "obj0",
              shape: "label1234",
              vertex: 8,
              vertical_line_segment: 8,
              horizontal_line_segment: 8,
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
            input_code: "'use imperative'; var obj1 = new Obj(8, 8, 8); obj1;",
            output_value: {
              id: "obj1",
              shape: "label1234",
              vertex: 8,
              vertical_line_segment: 8,
              horizontal_line_segment: 8,
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
              [0, 0, 0, 8, 8, 0, 0],
              [0, 0, 0, 0, 0, 0, 0],
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
                [8, 8],
                [0, 0],
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
            input_code: "'use imperative'; var obj2 = new Obj(8, 8, 8); obj2;",
            output_value: {
              id: "obj2",
              shape: "label1234",
              vertex: 8,
              vertical_line_segment: 8,
              horizontal_line_segment: 8,
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
            input_code: "'use imperative'; var obj0 = new Obj(8, 8, 8); obj0;",
            output_value: {
              id: "obj0",
              shape: "label1234",
              vertex: 8,
              vertical_line_segment: 8,
              horizontal_line_segment: 8,
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
            input_code: "'use imperative'; var obj1 = new Obj(8, 8, 8); obj1;",
            output_value: {
              id: "obj1",
              shape: "label1234",
              vertex: 8,
              vertical_line_segment: 8,
              horizontal_line_segment: 8,
              extension: 1,
            },
          },
        ],
      },
    ],
    declarations: [
      "'use declarative'; class Obj { constructor(vertex, vertical_line_segment, horizontal_line_segment) { this.shape = 'unspecified'; this.vertex = vertex; this.vertical_line_segment = vertical_line_segment; this.horizontal_line_segment = horizontal_line_segment; this.extension = 0; }}",
      "'use declarative'; if($Obj.vertical_line_segment === 8 && $Obj.horizontal_line_segment === 8 && $Obj.vertex === 8) { $Obj.shape = 'label1234'; $Obj.extension = 1; }",
    ],
  },
  visualizer: [
    {
      input_object: {
        x_position: 5,
        y_position: 0,
        object_matrix: [
          [8, 8],
          [0, 8],
        ],
      },
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
      input_object: {
        x_position: 0,
        y_position: 1,
        object_matrix: [
          [8, 8],
          [8, 0],
        ],
      },
      input_instance: [
        [0, 0, 0, 0, 0, 0, 0],
        [8, 8, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ],
    },
    {
      input_object: {
        x_position: 3,
        y_position: 3,
        object_matrix: [
          [8, 0],
          [8, 8],
        ],
      },
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
      input_object: {
        x_position: 0,
        y_position: 5,
        object_matrix: [
          [8, 0],
          [8, 8],
        ],
      },
      input_instance: [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 0, 0],
        [8, 8, 0, 0, 0, 0, 0],
      ],
    },
  ],
};

module.exports = { _3aa6fb7a };
