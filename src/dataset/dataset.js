const nucleoid = require("./nucleoid.md");
const arc = require("./arc.md");
const declarations = require("./declarations.md");
const instances = require("./instances.md");

const training = [
  require("./training.core.json"),
  require("./training.line.json"),
  require("./training.curve.json"),
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
      // const dataset = training.map(({ declarations, dataset }) => ({
      //   declarations,
      //   dateset: dataset.map(({ input_matrix, output_matrix }) => ({
      //     input_matrix,
      //     output_matrix,
      //   })),
      // }));

      return `
        ${nucleoid}
        ${arc}
        Training:
        ${JSON.stringify(training)}
      `;
    },
    instances: () => {
      const dataset = training.map(({ dataset }) => ({
        dateset: dataset.map(({ input_matrix, output_matrix, instances }) => ({
          input_matrix,
          output_matrix,
          instances: instances.map(({ input_instance }) => ({
            input_instance,
          })),
        })),
      }));

      return `
        Training Dataset:
        ${JSON.stringify(dataset)}
      `;
    },
    value: () => {
      // const dataset = training.map(({ declarations, dataset }) => ({
      //   declarations,
      //   dateset: dataset.map(({ input_matrix, output_matrix, instances }) => ({
      //     input_matrix,
      //     output_matrix,
      //     instances: instances.map(({ input_instance, instance_value }) => ({
      //       input_instance,
      //       instance_value,
      //     })),
      //   })),
      // }));

      return `
        ${nucleoid}
        ${arc}
        ${declarations}
        Train Dataset:
        ${JSON.stringify(training)}
      `;
    },
  },
  visualizer: {
    instances: () => {
      const dataset = training.map(({ dataset }) => ({
        dateset: dataset.map(({ input_matrix, output_matrix, instances }) => ({
          input_matrix,
          instances: instances.map(({ input_instance }) => ({
            input_instance,
          })),
        })),
      }));

      return `
        ${arc}
        ${instances}
        Training Dataset:
        ${JSON.stringify(dataset)}
      `;
    },
    value: () => {
      return `
        ${nucleoid}
        ${arc}
        ${declarations}
        ${instances}
        Training Dataset:
        ${JSON.stringify(training)}
      `;
    },
    output_instance: () => {
      const dataset = training.map(({ dataset }) => ({
        dateset: dataset.map(({ input_matrix, output_matrix, instances }) => ({
          input_matrix,
          instances: instances.map(
            ({ input_instance, output_instance, instance_value }) => ({
              input_instance,
              output_instance,
              instance_value,
            })
          ),
        })),
      }));

      return `
        ${arc}
        ${instances}
        Training Dataset:
        ${JSON.stringify(dataset)}
      `;
    },
  },
};
