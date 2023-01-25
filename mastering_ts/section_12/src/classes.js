class Player {
  static description = "Player In Our Game";
  #score = 0;
  #numLives = 10;
  constructor(first, last) {
    console.log("Constructor");
    this.first = first;
    this.last = last;
  }

  static randomPlayer() {
    return new Player("Andy", "Samburg");
  }

  get fullName() {
    return `${this.first} ${this.last}`;
  }

  get score() {
    return this.#score;
  }

  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive");
    }
    this.#score = newScore;
  }

  getScore() {
    return this.#score;
  }

  updateScore(newScore) {
    this.#score = newScore;
  }
  taunt() {
    console.log("test");
  }
  loseLife() {
    this.numLives -= 1;
  }
  secret() {}
}

class AdminPlayer extends Player {
  constructor(powers) {
    super(first, last);
    this.powers = powers;
  }
  isAdmin = true;
}

const admin = new AdminPlayer("admin", "mCadmin", ["delete", "restore world"]);

const player1 = new Player("blue", "steele");
player1.taunt();
console.log(player1.first);
const player2 = new Player("d", "dg");
player2.taunt();
