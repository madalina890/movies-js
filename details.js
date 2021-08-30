
"use strict"


function handleResponse(res) {
    if (!res.ok) {
        console.warn("Something went wrong");
        throw "Error";
    }
    return res.json();
}

async function getMovies() {


    const movie = await fetch("https://movies-app-siit.herokuapp.com/movies/60785b4cb67a170022f107b3").then(
        handleResponse
    );


    const containerHtml = document.querySelector(".content_details");
    const divMovie = document.createElement("div");
    const posterImage = document.createElement("img");
    const paragraphTitle = document.createElement("p");
    const shortInfo = document.createElement("div");
    const fragment = document.createDocumentFragment();
    const moviePlotPara = document.createElement("p");
    const rating = document.createElement("div");
    const grade = document.createElement("p")
    const star = document.createElement("i");
    const source = document.createElement("p");
    const sourceTitle = document.createElement("p");

    const movieTitle = movie.Title;
    const moviePoster = movie.Poster;
    const moviePlot = movie.Plot;

    const ratingArr = [];
    const sourceArr = [];
    for (let i = 0; i < movie.Ratings.length; i++) {
        ratingArr.push(" " + movie.Ratings[i].Value);
        sourceArr.push(" " + movie.Ratings[i].Source);
        
    }

    star.className = "fa fa-star";
    grade.className = "movie_grade";
    rating.className = "movie_rating-div";
    source.className = "source_name";
    sourceTitle.className = "source_title";
    posterImage.className =" justImg"
    paragraphTitle.className = "title";
    shortInfo.className = "info";

    sourceTitle.append("Sources: ");
    source.append(sourceTitle, sourceArr);
    grade.append(ratingArr);
    rating.append(star, grade);

    moviePlotPara.className = "movie-plot";
    moviePlotPara.append(moviePlot);

    posterImage.src = moviePoster;
    
    paragraphTitle.append(movieTitle);
    shortInfo.append(movie.Year + " - ", movie.Genre + " (", movie.Runtime + ")");
  
    divMovie.append(paragraphTitle, shortInfo, posterImage, moviePlotPara, source, rating);
    fragment.append(divMovie);
    containerHtml.append(fragment);


}

getMovies();




