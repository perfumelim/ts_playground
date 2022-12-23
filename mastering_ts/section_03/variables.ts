let movieTitle: string = "Avatar2";
movieTitle = "Coco";
//movieTitle = 9;
movieTitle.toLowerCase();

let numCatlives: number = 9;
numCatlives += 1;
//numCatlives = "eternal";

//Type Inference
let cat = "My love";
cat = "My life";
// cat = true;

const movies = ["Arrival", "The Thing", "Aliens", "Amadeus"];
let foundMovie;

for (let movie of movies) {
  if (movie === "Amadeus") {
    foundMovie = "Amadeus";
  }
}
foundMovie();
foundMovie = 1;
