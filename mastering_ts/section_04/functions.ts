function square(num) {
  num.toUpperCase();
  num();
  return num * num;
}

square(3);
square("cat");
square(true);

function myCat(name: string) {
  return `Hey, ${name}! Why are you so CUTE❣️`;
}

myCat("Homie");
//myCat(3)

function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}
