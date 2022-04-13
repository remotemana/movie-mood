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
    console.log(result);
    var moodResponse = result;
    var keys = Object.keys(moodResponse)
    console.log(keys)
    var values = Object.values(result);
    console.log(values)
    var maxValue = Math.max(...values)
    console.log(maxValue)
    var highestMood = values.indexOf(maxValue)
    // for (const key in response) {
    //   if (response.key === maxValue) {
    //      highestMood = response.key
    //      console.log(highestMood)
    //      return highestMood
    //   }
    // }
    var test = keys[highestMood]
    console.log(highestMood)
    console.log(test)
  })
  .catch(error => console.log('error', error));
})

// Button click end=================================================================================


// IF ELSE STATEMENTS FOR THE EMOTIONS START ===================================
function movieresults () {
  for (i = 0; i > mood.length; i++){
    // pulling the value out of the happy object in order to compare 
      // need to figure out how to remove/hide it from the object 
      // make all 
    var happy = mood[i].happy.value()
    var angry = mood[i].angry.value()
    var surprise = mood[i].surprise.value()
    var sad = mood[i].sad.value()
    var fear = mood[i].fear.value()
    if (happy > mood[i].length.val()) {
      familygenre()
      adventuregenre()
      comedygenre()
    } else if (angry > mood[i].length.val()){
      adventuregenre()
      actiongenre()
      mysterygenre()
    } else if (surprise > mood[i].val()) {
      adventuregenre()
      crimegenre()
      dramagenre()
    } else if (sad > mood[i].length.val()) {
      adventuregenre()
      actiongenre()
      fantasygenre()
    } else if (fear > mood[i].length.val()) {
      romancegenre ()
      sciencefictiongenre()
      comedygenre()
    }
}
}

// IF ELSE STATEMENTS FOR THE EMOTIONS START ===================================


