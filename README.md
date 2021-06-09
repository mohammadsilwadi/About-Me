# About-Me

this website contant guessing game
add q6 + q7 
I used for loop  and make  list in html in tow ways order list and unordered list .
mohammad silwadi was Navigator on this about me project.
 ahmad smadi was Driver on this about me project.
### this function added by ahmad smadi and mohammad silwadi
function fiveQuestion (question , correct , uncorrect){
let userInput; 
do {
  userInput= prompt(question).toLocaleLowerCase();

} while (userInput!== 'yes' && userInput !== 'y' && userInput !== 'no' && userInput !== 'n')

if( userInput === 'yes' || userInput === 'y') {
console.log (correct);
} else {
  console.log(uncorrect);
}
}
fiveQuestion('do you think I like sport?', 'you are right','wrong' )
fiveQuestion('do you think I hate cooking?', 'you are right','wrong' )
fiveQuestion('do you think I live in PARIS?', 'you are right','wrong' )
fiveQuestion('do you think I have 50 years old?', 'you are right','wrong' )
fiveQuestion('Is my  GPA in university  3.8?', 'you are right','wrong' ) .
