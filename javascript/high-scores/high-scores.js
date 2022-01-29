export class HighScores {
  constructor() {
    this.input = Number;
  }

  get scores() {
    let scoreList = new HighScores(30, 50, 20, 70);
    return scoreList;
  }

  get latest() {
    throw new Error("Remove this statement and implement this function");
  }

  get personalBest() {
    throw new Error("Remove this statement and implement this function");
  }

  get personalTopThree() {
    throw new Error("Remove this statement and implement this function");
  }
}
