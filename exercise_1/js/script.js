let currentDate = document.querySelector("[data-date='currentDate']");
currentDate.innerHTML = new Date();

// 1::::
/*
There is a notification banner on the site

1. add a friendly message to the notification "notification-content"
2. add a class to make the banner green, use this class: has-background-primary from: https://bulma.io/documentation/modifiers/color-helpers/
3. you will need to create an event listener and a function to do the above work

*/



// add a friendly message to the notification "notification-content"



const notification = document.querySelector(".notification-content");

notification.innerHTML = "hello lovely people"



// 2. add a class to make the banner green, use this class: 
// has-background-primary from: 
// https://bulma.io/documentation/modifiers/color-helpers/

const addHeader = document.querySelector(".notification-content");


addHeader.classList.add("has-background-primary")











