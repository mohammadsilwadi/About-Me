'use strict';

let rightAnswer=0;

let userName= prompt('what is your name');
alert('wlecome '+userName+ ' to my guessing game');


function trueQuestion (question , correct , uncorrect){
  let userInput;
  do {
    userInput= prompt(question).toLocaleLowerCase();
  } while (userInput!== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

  if( userInput === 'yes' || userInput === 'y') {

    alert(correct);
    rightAnswer++
    ;
  } else {
    alert(uncorrect);
  }
}
trueQuestion('do you think I like sport? enter yes or no or n or y !!!', 'you are right','I love sport' );
trueQuestion('do you think I hate cooking?   enter yes or no or n or y !!!', 'you are right','I hate cooking' );
function falseQuestion (question , correct , uncorrect){
  let userInput;
  do {
    userInput= prompt(question).toLocaleLowerCase();
  } while (userInput!== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n');

  if( userInput === 'yes' || userInput === 'y') {
    alert(correct)
    ;
  } else {
    alert(uncorrect);
    rightAnswer++;
  }
}

falseQuestion('Is my  GPA in university  3.8?    enter yes or no or n or y !!!','my GPA is 2.95','you are right');
falseQuestion('do you think I live in PARIS ?    enter yes or no or n or y !!!', 'I live in amman' , 'you are right');
falseQuestion('do you think I have 50 years old ?  enter yes or no or n or y !!!' , 'I am 24 years old' , 'you are right');
function question5(){
  let guessNumber= 0;
  for(let i=0; i<4;i++){
    guessNumber=prompt('guess my lucky number');
    guessNumber=parseInt(guessNumber);
    if (guessNumber === 7){
      rightAnswer++;
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

  }}
question5();

function question6(){
  let place =['italy','france','madrid','uae','morocco','egypt'];
  for(let b =0; b<6;b++){
    let visit=prompt('which country I am thinking to visit').toLowerCase();

    if (visit === place[0] || visit ===place[1] || visit ===place[2] ||visit ===place[3] ||visit ===place[4] ||visit ===place[5] ){
      rightAnswer++;
      break;
    } else ;{
      alert(' hint :country in europe or africa');
    }
  }}
question6();
alert(' these are the countries that i am thinking to visit italy,france,madrid,uae,morocco,egypt');
alert('you answer a ' + rightAnswer + ' questions right from seven questions') ;
alert('see you soon ' + userName) ;
