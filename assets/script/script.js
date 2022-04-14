// PSEUDOCODE
// 1. Push submit button 
  // addEventlistener
  // listen for click function 
// 2. analyze mood 
  // if else statements that would link the mood api data to the movie data 
      // 'if happy > the rest than pull a random movie from these three genres: comedy, romance, and feel good
        // the movie areas would be under a function 
// 3. analyze movie data
  // fetch the data of the movie by genre 
  // grab the initial genre by id 
    // get specific data: title, background img, release date, running time, directed by
  // have functions that are correlated by the mood as well as end conditions
// 4. display movies on the cards 
//shows the background of the card
  // that would be apart of the function for diplay cards 
  // fetch the data of the genre 
  // fetch specific data of the card (name)
// 5. once favorited moves to favorite
    // add event listener for the click of the favorite cards 
      // pull the data from the favorite cards
      // pull the data to local storage 
      // display o favorite cards 
        // add a div class and card elments to the page 
        // once added, add the div elements and classes that make the cards 
        // if no one has picked out the favorite card then display a modal of no cards
        // can clear the specific card
        // have a remove from favorites button that will modal tat will confirm their removal 

// WORKSPACE
console.log("I am linked!")
// movie api*

// function getApi() {
//   var movierequest = 'https://api.themoviedb.org/3/genre/movie/list?api_key=3cc14bbc37dcea39623d7e1965ec4e6b';*
//   fetch(movierequest)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);

// Garrett JS FOR WHEEL=======================================================
// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}
// Garrett JS FOR WHEEL============================================================================

// Lucas Emotion to text api start==================================================================
// TODO: ONLY uncomment emotion api text IF NEEDED. Server Requests are limited at (30/aUser/aMonth) 
// Button click start===============================================================================
$('#mdBtn').on('click', function() {
  
  var myHeaders = new Headers();
  myHeaders.append("apikey", "sdSmYIdXEYYzxmIWNuS3L8RY4kP5YJsQ");
  
  var raw = $("#submitBtn").val();
  
  var requestOptions = {
    method: 'POST',
    redirect: 'follow',
    headers: myHeaders,
    body: raw
  };

   fetch("https://api.apilayer.com/text_to_emotion", requestOptions)
    .then(response => response.json())
  .then(result => {
    // 1. giving the object of emotion weight values
    console.log(result);
    // 2. giving the array of name of happy angry suprise sad or fear
    var moodResponse = result;
    // 3. converts the object of names into an array 
    var keys = Object.keys(moodResponse)
    console.log(keys)
    // 5.converts the values of the object into an array
    var values = Object.values(result);
    console.log(values)
    // 5. gets the highest value out of the array
    var maxValue = Math.max(...values)
    console.log(maxValue)
    var highestMood = values.indexOf(maxValue)
    // 6. converts the value of the highest mood to the index of 0
    maxMood = keys[highestMood]
     // 7. returns the index of the of the name with the highest value
    console.log(highestMood)
    // 8. returns the name of the value
    console.log(maxMood)

    
  }) .then (()=> {
    
    if (happy === maxMood) {
      familygenre()
      adventuregenre()
      comedygenre()
    }
    
    if (angry === maxMood) {
      adventuregenre()
      actiongenre()
      mysterygenre()
    }
    
    if (surprise === maxMood) {
      adventuregenre()
      crimegenre()
      dramagenre()
    }
    
    if (sad === maxMood) {
      animation()
      actiongenre()
      fantasygenre()
    }
    
    if (fear === maxMood ) {
      romancegenre ()
      sciencefictiongenre()
      comedygenre()
    }

    document.getElementById("maxmood-output").innerText = maxMood
  })

  .catch(error => console.log('error', error));
// })

// Button click end=================================================================================

// group coding emotion data links start ===========================================================
var happy = "Happy"
var angry = "Angry"
var surprise = "Surprise"
var sad = "Sad" 
var fear = "Fear"
var maxMood


// if (happy === maxMood) {
//   familygenre()
//   adventuregenre()
//   comedygenre()
// }

// if (angry === maxMood) {
//   adventuregenre()
//   actiongenre()
//   mysterygenre()
// }

// if (surpirse === maxMood) {
//   adventuregenre()
//   crimegenre()
//   dramagenre()
// }

// if (sad === maxMood) {
//   animation()
//   actiongenre()
//   fantasygenre()
// }

// if (fear === maxMood ) {
//   romancegenre ()
//   sciencefictiongenre()
//   comedygenre()
// }

// var moodView = maxMood
// console.log(moodView)

})

// Emotion to text api end====================================================




// TYLER JS FOR MOVIE API ==========================

// AGENDA
// 3. analyze movie data
  // fetch the data of the movie by genre 
  // grab the initial genre by id 
    // get specific data: title, background img, release date, running time, directed by
  // have functions that are correlated by the mood as well as end conditions
// 4. display movies on the cards 
//shows the background of the card
  // that would be apart of the function for diplay cards 
  // fetch the data of the genre 
  // fetch specific data of the card (name)

//TMDB DATA

//GENERATES OUR API KEY
const API_KEY = 'api_key=3cc14bbc37dcea39623d7e1965ec4e6b';
//BASE URL FOR TMDB
const BASE_URL = 'https://api.themoviedb.org/3';
//SEARCHES MOVIES BASED ON POPULARITY
const API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&' + API_KEY;
//GRABS THE POSTER IMAGE
const IMG_URL = 'https://image.tmdb.org/t/p/w500';
//LIST OF GENRES FROM TMDB
const genres = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
]
var selectedGenre = [];

const searchURL = BASE_URL + '/search/movie?' + API_KEY;

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');
const tagsEl = document.getElementById('tags');

//FILTER MOVIE SEARCH BY GENRE
setGenre();

function setGenre() {
  //CLEARS CURRENT HTML
  tagsEl.innerHTML = '';

  //REPEATS PROCESS FOR EACH GENRE
  genres.forEach(genre => {
    //CREATES BUTTON FOR GIVEN GENRE
    const t = document.createElement('div');
    t.classList.add('tag');
    t.id = genre.id;
    t.innerText = genre.name;
    //FITERS MOVIES ON CLICK OF GENRE BUTTON
    t.addEventListener('click', () =>{
      if (selectedGenre.length == 0){
        //ADDS CHOSEN GENRE IF NOT ALREADY SELECTED
        selectedGenre.push(genre.id);
      }else {
        //CHECKS IF GENRE HAS ALREADY BEEN SELECTED
        if(selectedGenre.includes(genre.id)){
          selectedGenre.forEach((id, idx) => {
            //REMOVES GENRE FROM FILTER IF ALREADY SELECTED
            if(id == genre.id){
              selectedGenre.splice(idx, 1);
  
            }
          })
        }else {
          //ADDS GENRE TO OUR FILTERED LIST
          selectedGenre.push(genre.id);
        }
      }
      console.log(selectedGenre)
      //JOINS ALL GENRES IN ARRAY, PRESENTS AS A STRING
      getMovies(API_URL + '&with_genres=' + encodeURI(selectedGenre.join(', ')))
    })

    tagsEl.append(t);
  })
}

//ENCOMPASSING FUNCTION FOR THE STEPS BELOW
getMovies(API_URL);

//GRABS ALL MOVIES COLLECTED FROM TMDB
function getMovies(url) {

  fetch(url).then(res => res.json()).then(data => {
    console.log(data.results)
    showMovies(data.results);
  })

}

//DISPLAYS INFORMATION FROM MOVIE
function showMovies(data) {
  //CLEARS MAIN
  main.innerHTML = '';
  //RUNS PROCESS FOR EVERY MOVIE AVAILABLE
  data.forEach(movie => {
    const {title, poster_path, vote_average, overview} = movie;
    //CREATES NEW EMPTY DIV FOR A MOVIE
    const movieEl = document.createElement('div');
    //ADDS 'MOVIE' CLASS TO DIV
    movieEl.classList.add('movie');
    //CHANGES HTML OF DIV TO INCLUDE ALL WANTED INFORMATION
    movieEl.innerHTML = `
      
      <img src="${IMG_URL+poster_path}" alt="${title}">

      <div class ="movie-info">
        <h3>${title}</h3>
        <span class="${getColor(vote_average)}">${vote_average}</span>
      </div>

      <div class="overview">
        <h3?>Overview</h3?>
        ${overview}
      </div>

      `
      //APPENDS OUR NEW MOVIE CARD TO MAIN SO WE CAN SEE IT ON OUR PAGE
      main.appendChild(movieEl);
  })

}

//CHECKS TMDB'S RATING OF MOVIE, CHANGES COLOR BASED ON SCORE
function getColor(vote) {
  if(vote >= 8){
    return 'green'
  }else if(vote >= 5){
    return 'orange'
  }else {
    return 'red'
  }
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm){
    getMovies(searchURL+'&query='+searchTerm)
  }else{
    getMovies(API_URL);
  }
})

// MOVIE API END

//emotion data links end===============================================================\

