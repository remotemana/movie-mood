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
  myHeaders.append("apikey", "yOoOHlFQ2ZmZ60NwgqeuNBSzWiLBVWcL");
  
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
    var maxMood = keys[highestMood]
     // 7. returns the index of the of the name with the highest value
    console.log(highestMood)
    // 8. returns the name of the value
    console.log(maxMood)
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

if (surpirse === maxMood) {
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


//emotion data links end===============================================================\
