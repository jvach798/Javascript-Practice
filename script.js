let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
    constructor(title, rating, haveWatched) {
        this.title = title;
        this.rating = rating;
        this.haveWatched = haveWatched;
    }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
    allMovies.push(movie);
    console.log("A new movie has been added");
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
    let rtn = "Printing all movies....\n";
    for (let i = 0; i < allMovies.length; i++) {
        rtn += allMovies[i].title;
        rtn += ", rating of ";
        rtn += allMovies[i].rating;
        rtn += ", havewatched: ";
        rtn += allMovies[i].haveWatched;
        rtn += "\n"; 
    }
    rtn += "\n";
    rtn += "You have ";
    rtn += allMovies.length;
    rtn += " movies in total"
    console.log(rtn);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
    let rtn = "printing movie that has a rating higher than ";
    rtn += rating;
    rtn += "\n"
    let count = 0;
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].rating > rating) {
            rtn += allMovies[i].title;
            rtn += " has a rating of ";
            rtn += allMovies[i].rating;
            rtn += "\n";
            count++;
        }
    }
    rtn += "\n";
    rtn += "In total, there are ";
    rtn += count;
    rtn += " matches";
    console.log(rtn);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
    for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].title == title) {
            allMovies[i].haveWatched = !allMovies[i].haveWatched;
        }
    }
    console.log("changing the status of the movie...");
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);