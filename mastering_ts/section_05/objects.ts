function printName(person: { first: string; last: string }) {
  console.log(`${person.first} ${person.last}`);
}

printName({ first: "Perfume", last: "Lim" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

const singer = { first: "Mick", last: "Jagger", age: 73, isAlive: true };
printName(singer);

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 123,
  username: "cat",
};

console.log(user.id);
user.id = 234;

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };
