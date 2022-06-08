// const API_KEY= "04c35731a5ee918f014970082a0088b1";

const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';

const IMG_PATH= 'https://image.tmdb.org/t/p/w1280'

const mainContainer = document.querySelector(".mainContainer");
const movieContainer = document.querySelector(".movieContainer");
// const testing = document.querySelector(".testing");
let respData = [];


const getMovies = async () => {
  
    try {
        const response = await fetch(API_URL);

        respData = await response.json();
        
        console.log(respData);
        
        respData.results.forEach(movie => {

            let movieContainer = document.createElement("div")
            movieContainer.classList.add("movieContainer")
            let filmWrapper = document.createElement("div");
            
                        // sorting();

            filmWrapper.classList.add("filmWrapper");
            let { poster_path, title, vote_average,overview,release_date } = movie;

            let overView = document.createElement("div");

            overView.classList.add("overview");

            overView.innerHTML = `
          <h4>overview:</h4>

            ${overview}
            <br>
            <br>
        <small>Release Date: ${release_date} </small>`;

// let releaseDate= document.createElement("small")
           
            filmWrapper.innerHTML = `<img src="${IMG_PATH + poster_path}" loading="lazy" alt="${title}" />
           <div class="movieDetailsBox">
             <div class="titleCont">
               <h3>${title}</h3>
            </div>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>`;
             const toTOP = document.createElement("div") 
               toTOP.classList.add("triangle-wrapper");
          toTOP.innerHTML = `<div class="triangle">
        <p><a href="#"> &nbsp;To <br> &nbsp;Top</a></p>
     </div>`;
            
            movieContainer.appendChild(filmWrapper);
            filmWrapper.appendChild(overView);
            mainContainer.appendChild(movieContainer);
            mainContainer.appendChild(toTOP);
 
            
        });
        return respData;

        
        
    } catch (error) {
        console.error("sorry something went wrong");
    }
    
    
}


getMovies();

const getClassByRate = (rate) => {
    if (rate >= 8) {

        return "green"
        
    } if (rate >= 5) {
        
        return "blue"
        
    } else {

        return "red"
        
    }
}

 let sorted= false


let resetSort = document.querySelector(".Reset");

const sortMovie = document.querySelector(".Sort");

function HL() {
 sorted= true

   mainContainer.innerHTML = "";
    console.log(respData,"testing");
         respData.results.sort((a, b) => {
             return  b.vote_average - a.vote_average
         });
    
    console.log("result", respData.results);
    respData.results.map((movie) => { 

        let movieContainer = document.createElement("div");
           movieContainer.classList.add("movieContainer")
       
        let filmWrapper = document.createElement("div");
        let { poster_path, title, vote_average,overview,release_date } = movie;

       
           filmWrapper.classList.add("filmWrapper");
       
           let overView = document.createElement("div");
       
                   overView.classList.add("overview");
       
                   overView.innerHTML = `
                 <h4>overview:</h4>
       
                   ${overview}
                   <br>
            <br>
        <small>Release Date: ${release_date} </small>`;
       
                       filmWrapper.innerHTML = `<img src="${IMG_PATH + poster_path}" loading="lazy" alt="${title}" />
                  <div class="movieDetailsBox">
                    <div class="titleCont">
                      <h3>${title}</h3>
                   </div>
                   <span class="${getClassByRate(vote_average)}">${vote_average}</span>
               </div>`
               ;
               const toTOP = document.createElement("div") 
               toTOP.classList.add("triangle-wrapper");
               toTOP.innerHTML=`<div class="triangle">
        <p><a href="#"> &nbsp;To <br> &nbsp;Top</a></p>
     </div>`
      
        // console.log(movieContainer);
        movieContainer.appendChild(filmWrapper);
        filmWrapper.appendChild(overView);
        mainContainer.appendChild(movieContainer);
        mainContainer.appendChild(toTOP);
       
       
       
    });
    

     
            
            
        

}

// hello();

function LH() {
 sorted= false

    mainContainer.innerHTML = "";

      console.log("testing");
        respData.results.sort((a, b) => a.vote_average - b.vote_average);
    respData.results.map((movie) => { 
      console.log("res", respData);

        let movieContainer = document.createElement("div");
           movieContainer.classList.add("movieContainer")
       
        let filmWrapper = document.createElement("div");
        let { poster_path, title, vote_average,overview,release_date } = movie;

       
           filmWrapper.classList.add("filmWrapper");
       
           let overView = document.createElement("div");
       
                   overView.classList.add("overview");
       
                   overView.innerHTML = `
                 <h4>overview:</h4>
       
                   ${overview}
                   <br>
            <br>
        <small>Release Date: ${release_date} </small>`;
       
                       filmWrapper.innerHTML = `<img src="${IMG_PATH + poster_path}" loading="lazy" alt="${title}" />
                  <div class="movieDetailsBox">
                    <div class="titleCont">
                      <h3>${title}</h3>
                   </div>
                   <span class="${getClassByRate(vote_average)}">${vote_average}</span>
               </div>`;
       const toTOP = document.createElement("div") 
               toTOP.classList.add("triangle-wrapper");
      toTOP.innerHTML = `<div class="triangle">
        <p><a href="#"> &nbsp;To <br> &nbsp;Top</a></p>
     </div>`;
        // console.log(movieContainer);
     movieContainer.appendChild(filmWrapper);
        filmWrapper.appendChild(overView);
       mainContainer.appendChild(movieContainer);
       mainContainer.appendChild(toTOP);
       
       
    });
      
}
  //  TODO:___implementing two functions
function toggle_HL_LH() {
    sorted ? LH() : HL();
    
}

//  TODO:___toggling between two functions
sortMovie.addEventListener("click", () => { 
    toggle_HL_LH();
});


