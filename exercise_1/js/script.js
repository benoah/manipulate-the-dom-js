let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/
*/


// add a friendly message to the notification "notification-content"
const notification = document.querySelector(".notification-content");
notification.innerHTML = "hello amazing people";


// add a class to make the banner green, 
// use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/

const addHeader = document.querySelector(".notification");

addHeader.classList.add("has-background-primary")


// 2::::
/*
 The notification banner should not always show.

 1. only show the notification banner when you click the login button. 
 (clue, this is an event.)
*/

// choose the notification banner

const logButton = document.querySelector(".is-light")


const notificationBanner= document.querySelector(".notification")


//notificationBanner.style.display="none";

logButton.addEventListener ("click", function(event){

    if (notificationBanner.style.display === "none"){
        notificationBanner.style.display = "block"
    }
    else{
        notificationBanner.style.display = "none"
    }; 

})


// it is also possibel to use css property "is-invisible"
/*
notificationContainer.classList.toggle("is-invisible");

 function showBanner(event) {
   notificationContainer.classList.toggle("is-invisible");
 }
*/


// 3::::
/*
  The hero banner looks sad without an image, 
  please add a nice photo as background image to the hero banner.
*/

const heroImage = document.querySelector(".hero");

function backgroundImage (){



}


