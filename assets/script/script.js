console.log("I am linked!")

var favCard = document.querySelector(".favoriteCard")
var favMoviePoster = document.querySelector(".moviePosterArea");
var favTextArea = document.querySelector(".textArea");

favMoviePoster.addEventListener("click", favExpand);

favTextArea.addEventListener("click", favCollapse);


function favExpand(){
    favTextArea.style.display = "flex";
    favCard.style.zIndex = "6"


}  

function favCollapse() {    
    favTextArea.style.display = "none";
    favCard.style.zIndex = "0";
}

var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}