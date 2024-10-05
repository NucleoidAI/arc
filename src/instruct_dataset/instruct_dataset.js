const nucleoid = require("./nucleoid.md");
const arc = require("./arc.md");
const declarations = require("./declarations.md");
const instances = require("./instances.md");

const dataset = [
  require("./dataset.core.json"),
  require("./dataset.line.json"),
  require("./dataset.curve.json"),
];

module.exports = {
  nucleoid,
  arc,
  declarations,
  analyzer: {
    patterns: () => {
      return `
        ${arc}
      `;
    },
    declarations: () => {
      return `
        ${arc}
        ${nucleoid}
        ${declarations}
        instruct_dataset:
        ${JSON.stringify(dataset)}
      `;
    },
    instances: () => {
      return `
        ${arc}
        ${instances}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ dataset }) => ({
            dateset: dataset.map(
              ({ input_matrix, output_matrix, instances }) => ({
                input_matrix,
                output_matrix,
                instances: instances.map(
                  ({ input_instance, output_instance }) => ({
                    input_instance,
                    output_instance,
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
        ${declarations}
        ${instances}
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
        ${instances}
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
        ${declarations}
        ${instances}
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
        ${instances}
        instruct_dataset:
        ${JSON.stringify(
          dataset.map(({ dataset, declarations }) => ({
            declarations,
            dateset: dataset.map(({ instances }) => ({
              instances: instances.map(
                ({ input_instance, output_instance, instance_value }) => ({
                  input_instance,
                  output_instance,
                  instance_value,
                })
              ),
            })),
          }))
        )}
      `;
    },
  },
};
