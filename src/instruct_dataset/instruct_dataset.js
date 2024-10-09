const nucleoid = require("./nucleoid.md");
const arc = require("./arc.md");
const Matrix = require("../lib/Matrix");
const Zoom = require("../lib/Zoom");

const dataset = [
  require("./dataset.core.json"),
  require("./dataset.line.json"),
  require("./dataset.curve.json"),
].map(({ declarations, dataset }) => ({
  declarations,
  dataset: dataset.map(({ input_matrix, output_matrix, instances }) => ({
    input_matrix,
    output_matrix,
    instances: instances.map(
      ({
        instance_name,
        input_instance,
        output_instance,
        nuc,
        instance_value,
      }) => ({
        instance_name,
        input_instance: Matrix.encode(input_instance),
        output_instance: Matrix.encode(output_instance),
        input_object: Zoom.focus(input_instance),
        output_object: Zoom.focus(output_instance),
        nuc,
        instance_value,
      })
    ),
  })),
}));

module.exports = {
  nucleoid,
  arc,
  analyzer: {
    statements: () => {
      return `
        ${arc}
      `;
    },
    declarations: () => {
      return `
        ${arc}
        ${nucleoid}
        instruct_dataset:
        ${JSON.stringify(dataset)}
      `;
    },
    instances: () => {
      return `
        ${arc}
        ${nucleoid}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ declarations, dataset }) => ({
            declarations,
            dateset: dataset.map(
              ({ input_matrix, output_matrix, instances }) => ({
                input_matrix,
                output_matrix,
                instances: instances.map(
                  ({
                    input_instance,
                    output_instance,
                    input_object,
                    output_object,
                  }) => ({
                    input_instance,
                    output_instance,
                    input_object,
                    output_object,
                  })
                ),
              })
            ),
          }))
        )}
      `;
    },
    value: () => {
      return `
        ${arc}
        ${nucleoid}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ declarations, dataset }) => ({
            declarations,
            dateset: dataset.map(
              ({ input_matrix, output_matrix, instances }) => ({
                input_matrix,
                output_matrix,
                instances: instances.map(
                  ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  }) => ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  })
                ),
              })
            ),
          }))
        )}
      `;
    },
  },
  visualizer: {
    instances: () => {
      return `
        ${arc}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ dataset }) => ({
            dateset: dataset.map(({ input_matrix, instances }) => ({
              input_matrix,
              instances: instances.map(({ input_instance }) => ({
                input_instance,
              })),
            })),
          }))
        )}
      `;
    },
    value: () => {
      return `
        ${arc}
        ${nucleoid}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ declarations, dataset }) => ({
            declarations,
            dateset: dataset.map(
              ({ input_matrix, output_matrix, instances }) => ({
                input_matrix,
                output_matrix,
                instances: instances.map(
                  ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  }) => ({
                    instance_name,
                    input_instance,
                    output_instance,
                    nuc,
                  })
                ),
              })
            ),
          }))
        )}
      `;
    },
    output_instance: () => {
      return `
        ${arc}
        instruct_dataset:
        ${JSON.stringify(dataset)}
      `;
    },
  },
};
