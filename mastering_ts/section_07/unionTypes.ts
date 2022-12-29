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

const coord: (Poi | Loc)[] = [];
coord.push({ lat: 32.1, long: 23.3 });

const giveAnswer = (answer: "yes" | "no" | "maybe") => {
  return `The answer is ${answer}`;
};

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wednesday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Friday";
