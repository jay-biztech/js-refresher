type CombinableI = string | number;
type NumericI = number | boolean;

type UniversalI = Combinable & Numeric;

function addI(a: number, b: number): number;
function addI(a: string, b: string): string;
function addI(a: string, b: number): string;
function addI(a: number, b: string): string;
function addI(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = addI('Jay', 'PArmar');
