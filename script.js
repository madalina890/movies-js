


function handleResponse(res) {
    if (!res.ok) {
        console.warn("Something went wrong");
        throw "Error";
    }
    return res.json();
}
async function getMovies() {

    const movies = await fetch("https://movies-app-siit.herokuapp.com/movies/").then(
        handleResponse
    );
    
    for (let i = 0; i < movies.results.length; i++) {             

        const htmlContent = document.querySelector('[data-movies]');    
        const divContent = document.createElement("div");
        const movieImage = document.createElement("img");
        const line_Title = document.createElement("p");

        const fragment = document.createDocumentFragment();

        const movieTitle = movies.results[i].Title;
        const moviePoster = movies.results[i].Poster;

        movieImage.src = moviePoster;

        line_Title.append(movieTitle);
        divContent.append(line_Title,movieImage);
        fragment.append(divContent);
        htmlContent.append(fragment);

    }
}

getMovies();