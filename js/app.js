'use strict';

let rightAnswer=0;
let userName= prompt('what is your name');
alert('wlecome '+userName+ ' to my guessing game');

let like= prompt('do you think I like sport?').toLowerCase();
if (like === 'yes' || like === 'y'){

  //console.log( like )
  alert( 'correct' );
  rightAnswer++;

}else if (like === 'no' || like === 'n'){


  alert('I love sport');
}else {
  alert('Please type (yes) or (no) or (y) or (n)');

}
let hate= prompt('do you think I hate cooking?').toLowerCase();

if (hate === 'yes' || hate === 'y'){

  //console.log(hate)
  alert('correct');
  rightAnswer++;
}else if (hate === 'no' || hate === 'n'){


  alert('I hate cooking');
}else {
  alert('Please type (yes) or (no) or (y) or (n)');

}
let live= prompt('do you think I live in PARIS ?').toLowerCase();
if (live === 'yes' || live === 'y'){

  alert('I live in Amman');

}else if (live === 'no' || live === 'n'){

  //console.log(live)
  alert('correct');
  rightAnswer++;
}else {
  alert('Please type (yes) or (no) or (y) or (n)');

}
let age= prompt('do you think I have 50 years old ?').toLowerCase();
if (age === 'yes' || age === 'y'){


  alert('I am 24 years old');

}else if (age === 'no' || age === 'n'){

  //console.log(age)
  alert('correct');
  rightAnswer++;
}else {
  alert('Please type (yes) or (no) or (y) or (n)');

}
let luckyNumber= prompt('IS 159 is my lucky number').toLowerCase();
if (luckyNumber === 'yes' || luckyNumber === 'y'){

  alert('my lucky Number is 7');

}else if (luckyNumber === 'no' || luckyNumber === 'n'){

  //console.log(luckyNumber)
  alert('correct');
  rightAnswer++;
}else {
  alert('Please type (yes) or (no) or (y) or (n)');}
let guessNumber= 0;
for(let i=0; i<4;i++){
  guessNumber=prompt('guess my lucky number');
  guessNumber=parseInt(guessNumber);
  if (guessNumber === 7){
    rightAnswer++;
    //console.log( like )
    break;
  }
  else if (guessNumber >=8 && guessNumber<=11){
    alert('too close');
  }
  else if (guessNumber >=3&&guessNumber<=6 ){
    alert('too close');
  }
  else if(12 <= guessNumber ){
    alert('too high from the answer');
  }
  else if (guessNumber <= 2 ){
    alert('too low from the answer');
  }
  else alert('only numbers allowed!!');



}



let place =['italy','france','madrid','uae','morocco','egypt'];
for(let b =0; b<6;b++){
  let visit=prompt('which country I am thinking to visit').toLowerCase();

  if (visit === place[0] || visit ===place[1] || visit ===place[2] ||visit ===place[3] ||visit ===place[4] ||visit ===place[5] ){
    // eslint-disable-next-line no-unused-vars
    rightAnswer++;
    //console.log( like )
    break;
  } else (visit !== place[0] || visit !==place[1] || visit !==place[2] ||visit !==place[3] ||visit !==place[4] ||visit !==place[5] );{
    alert(' hint :country in europe or africa');
  }
}
alert(' these are the countries that i am thinking to visit italy,france,madrid,uae,morocco,egypt');
alert('you answer a ' + rightAnswer + ' questions right from seven questions') ;
alert('see you soon ' + userName) ;

