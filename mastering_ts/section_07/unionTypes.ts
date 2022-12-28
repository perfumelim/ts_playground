let age: number | string = 21;
age = 23;
age = "24";

type Poi = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Poi | Loc = { x: 1, y: 34 };

function printAge(age: number | string) {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("8");

function calculateTax(price: number | string, tax: number) {
  if (typeof price === "string") {
    price.replace("$", "");
  }
}

const stuff: (number | string)[] = [1];
