'use strict';
let userName= prompt('what is your name')
alert('wlecome '+userName+ ' to my guessing game')

let like= prompt('do you think I like sport?').toLowerCase();
if (like === 'yes' || like === 'y'){
    
    //console.log(like)
    alert(correct)

}else if (like === 'no' || like === 'n'){

    
    alert('I love sport')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let hate= prompt('do you think I hate cooking?').toLowerCase();

if (hate === 'yes' || hate === 'y'){
    
    //console.log(hate)
    alert(correct)

}else if (hate === 'no' || hate === 'n'){

    
    alert('I hate cooking')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let live= prompt('do you think I live in PARIS ?').toLowerCase();
if (live === 'yes' || live === 'y'){
    
    alert('I live in Amman')

}else if (live === 'no' || live === 'n'){

    //console.log(live)
    alert(correct)
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let age= prompt('do you think I have 50 years old ?').toLowerCase();
if (age === 'yes' || age === 'y'){
    
    
    alert('I am 24 years old')

}else if (age === 'no' || age === 'n'){

    //console.log(age)
    alert(correct)
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let luckyNumber= prompt('IS 159 is my lucky number').toLowerCase();


if (luckyNumber === 'yes' || luckyNumber === 'y'){
    
    
    alert('my lucky Number is 7')

}else if (luckyNumber === 'no' || luckyNumber === 'n'){

    //console.log(luckyNumber)
    alert(correct)
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
alert('see you soon ' + userName)