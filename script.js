

const card = document.getElementById("card");
const thankYouCard = document.getElementById("thankYouCard");
// const ratings = document.getElementById('ratings');
// const rating = document.getElementsByClassName("rating");
// const checkmark = document.getElementsByClassName("checkmark");
// const rating1 = document.getElementById("rating1");
// const rating2 = document.getElementById("rating2");
// const rating3 = document.getElementById("rating3");
// const rating4 = document.getElementById("rating4");
// const rating5 = document.getElementById("rating5");
// const input = document.querySelector('input');


let ele = document.getElementsByName('radio');


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









