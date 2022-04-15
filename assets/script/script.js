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
//  ONLY uncomment emotion api text IF NEEDED. Server Requests are limited at (30/aUser/aMonth) 
// Button click start===============================================================================
var selectedGenre = [];
$('#mdBtn').on('click', function() {
  
  var myHeaders = new Headers();
  myHeaders.append("apikey", "JUExjAtOKf3ypzrUtSA5QGnZLbvDr14O");
  
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
  console.log(maxMood);
  selectedGenre.push(10751);
  selectedGenre.push(12);
  selectedGenre.push(35);

  console.log(selectedGenre);
}

if (angry === maxMood) {
  console.log(maxMood);
  selectedGenre.push(28);
  selectedGenre.push(12);
  selectedGenre.push(53);
  console.log(selectedGenre);
}

if (surprise === maxMood) {
  console.log(maxMood);
  selectedGenre.push(12);
  selectedGenre.push(80);
  selectedGenre.push(18);
  console.log(selectedGenre);
}

if (sad === maxMood) {
  console.log(maxMood);
  selectedGenre.push(16);
  selectedGenre.push(28);
  selectedGenre.push(14);
  console.log(selectedGenre);
}

if (fear === maxMood ) {
  console.log(maxMood);
  selectedGenre.push(14);
  selectedGenre.push(878);
  selectedGenre.push(35);
  console.log(selectedGenre);
}
displayMovie()

    document.getElementById("maxmood-output").innerText = maxMood
  })
  .catch(error => console.log('error', error));
})
// Button click end=================================================================================

// group coding emotion data links start ===========================================================
var happy = "Happy"
var angry = "Angry"
var surprise = "Surprise"
var sad = "Sad" 
var fear = "Fear"
var maxMood

//DEFINES GENRE FOR MOOD

// TYLER JS FOR MOVIE API ==========================
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

const searchURL = BASE_URL + '/search/movie?' + API_KEY;
const card1 = document.getElementById('card1');
const card2 = document.getElementById('card2');
const card3 = document.getElementById('card3');

function displayMovie() {
  
  for (let i = 0; i < selectedGenre.length; i++) {
    
    //ENCOMPASSING FUNCTION FOR THE STEPS BELOW
    getMovies(API_URL + '&with_genres=' +encodeURI(selectedGenre[i]));
    
    //GRABS ALL MOVIES COLLECTED FROM TMDB
    function getMovies(url) {
      
      fetch(url).then(res => res.json()).then(data => {
        console.log(data.results)
        showMovies(data.results);
      })
      
    }
    
    //DISPLAYS INFORMATION FROM MOVIE
    function showMovies(data) {
      console.log(data);
      //CLEARS MAIN
      document.getElementById(`card${i+1}`).innerHTML = '';
      //CHECKS TO MAKE SURE A MOVIE IS AVAILABLE IN THIS GENRE
      console.log(data[0])
      //CREATE NEW DIV TO PUT DATA INTO
      const movieEl = document.createElement('div')
      //DISPLAYS RUNTIME IF AVAILABLE, IF NOT, DISPLAY 'NOT AVAILABLE'
      var runtime = data[0].runtime || "not available";
      //REWRITES INNER HTML FOR OUR CARD
      movieEl.innerHTML =`
      <div class="movieinformation">
      <h3> <strong>${data[0].title}</strong></h3>
      <p>Release Date: ${data[0].release_date}</p>
      <p>Running Time: ${runtime}</p>
      <a href="#favorites" uk-icon="icon: heart"></a>
      </div>
      `
      movieEl.style.backgroundImage = `url(${IMG_URL+data[0].poster_path})`
      movieEl.style.zIndex = `6`
      movieEl.style.filter = 'none'
      
      document.getElementById(`card${i+1}`).appendChild(movieEl);
    }
  }
}
  
  
  // MOVIE API END
  