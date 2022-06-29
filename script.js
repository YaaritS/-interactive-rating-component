'use strict'

const card = document.getElementById("card");
const thankYouCard = document.getElementById("thankYouCard");


/* Select all the ratings */
let ele = document.getElementsByName('radio'); 
// console.log(ele);

/* This function has a for loop that runs on the ratings list and the if statement checkes which one is checked, the code is to put the message on the thank you button. Then we have another if statement to hide the card and show the thank you card. */

function displayRadioValue() {
  for(i = 0; i < ele.length; i++) {
      if(ele[i].checked)
      document.getElementById("thankYouBtn").innerHTML
              = `You selected ${ele[i].value} out of 5`;
       };
  if(card.style.visibility === 'visible') {
    card.style.visibility = 'visible';
    thankYouBody.visibility = 'hidden';

  } else {
    card.style.display = 'none';
    thankYouBody.style.visibility = 'visible';
  }
};









