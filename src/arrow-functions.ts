const sum = (a: number, b: number) => a + b;

const sumWithDefault = (a: number, b: number = 10) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);
