const inputEl = document.querySelector<HTMLInputElement>("#username")!;
console.dir(inputEl)
inputEl.value= "Hacked!";

const btn = document.querySelector<HTMLButtonElement>(".btn")!;

function numberIdentity(item: number):number{
  return item;
}

function stringIdentity(item: string):string{
  return item;
}


function identity<T>(item: T): T {
  return item;
} 


