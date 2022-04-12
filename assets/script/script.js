console.log("I am linked!")


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
// Garrett JS FOR WHEEL=======================================================


// Lucas Emotion to text api start============================================

// TODO: ONLY uncomment emotion api text IF NEEDED. Server Requests are limited at (30/aUser/aMonth) 

// var myHeaders = new Headers();
// myHeaders.append("apikey", "yOoOHlFQ2ZmZ60NwgqeuNBSzWiLBVWcL");

// var raw = "body";

// var requestOptions = {
//   method: 'POST',
//   redirect: 'follow',
//   headers: myHeaders,
//   body: raw
// };

// fetch("https://api.apilayer.com/text_to_emotion", requestOptions)
//   .then(response => response.text())
//   .then(result => console.log(result))
//   .catch(error => console.log('error', error));



// Emotion to text api end====================================================