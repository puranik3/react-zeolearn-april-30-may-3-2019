const sum1 = ( x: number, y : number ) : number => x + y;

const sum2 : ( a : number, b : number ) => number  = ( x, y ) => x + y;

// success is a function that accepts a string and return nothing
function ajax( url : string, method : string, success : ( x : string ) => void ) {

}

// Define the signature for postMovies() - a function that accepts an array of movie objects, success function (gets an array of movies) and error function (gets an error object). postMovies returns a boolean.
// Note: Do define an interface for Movie
interface Movie {
    name: string,
    cast: Array<string>
}

const postMovies = ( movies : Array<Movie>, success : ( x: Array<Movie> ) => void, error : Error ) => {
    return true;
};