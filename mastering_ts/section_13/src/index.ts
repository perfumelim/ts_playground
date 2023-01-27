class Players{


  constructor(public first: string, public last: string, protected _score: number) {
    
  }
 private secretMethod(): void {
console.log("SECRET METHOD")
}

get fullName() : string {
  return `${this.first} ${this.last}`
  }

  get score():number {
  return this._score;
  }
  set score(newScore:number) {
    if(newScore<0) throw new Error("Score cannot be negative")
    this._score = newScore;
  }
}

class SuperPlayer extends Players {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999;
  }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName
elton.score = -123

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;

}

class Bike implements Colorful{
  constructor(public color: string) {

  }
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string){
  }
  print(){
    console.log(`${this.color} ${this.brand}`)
  }
}

const bike1 = new Bike("red")
const jacket1 = new Jacket("Prada", "black");

abstract class Employee {
constructor(public first: string, public last: string) {}
abstract getPay(): number;

greet() {
  console.log("HELLO")
}
}

class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private salary:number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary
  }
}

class PartTimeEmployee extends Employee {

  constructor(
    first: string,
    last: string,
    private hourlyRate : number,
    private hoursWorked: number
  ){
    super(first, last)
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked
  }
}