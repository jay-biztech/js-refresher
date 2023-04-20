// type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b: number): number;
}

interface PersonII {
  readonly name: string;
  outputName?: string;
}

let add: AddFn;

add = (n1: number, n2: number) => n1 + n2;

console.log(add(5, 5));
