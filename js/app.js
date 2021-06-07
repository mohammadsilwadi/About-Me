'use strict';
let userName= prompt('what is your name')
alert('wlecome '+userName+ ' to my gussing game')

let like= prompt('do you think I like sport?').toLowerCase();
if (like === 'yes' || like === 'y'){
    
    //console.log(like)
    alert('great')

}else if (like === 'no' || like === 'n'){

    //console.log(like)
    alert('I love sport')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let hate= prompt('do you think I hate cooking?').toLowerCase();

if (hate === 'yes' || hate === 'y'){
    
    //console.log(hate)
    alert('great')

}else if (hate === 'no' || hate === 'n'){

    //console.log(hate)
    alert('I hate cooking')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let live= prompt('do you think I live in PARIS ?').toLowerCase();
if (live === 'yes' || live === 'y'){
    
    //console.log(live)
    alert('I live in Amman')

}else if (live === 'no' || live === 'n'){

    //console.log(live)
    alert('I live in Amman')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let age= prompt('do you think I have 50 years old ?').toLowerCase();
if (age === 'yes' || age === 'y'){
    
    //console.log(age)
    alert('I am 24 years old')

}else if (age === 'no' || age === 'n'){

    //console.log(age)
    alert('I am 24 years old')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
let luckyNumber= prompt('IS 159 is my lucky number').toLowerCase();


if (luckyNumber === 'yes' || luckyNumber === 'y'){
    
    //console.log(luckyNumber)
    alert('my lucky Number is 7')

}else if (luckyNumber === 'no' || luckyNumber === 'n'){

    //console.log(luckyNumber)
    alert('my lucky Number is 7')
}else {
    alert('Please type (yes) or (no) or (y) or (n)')

}
alert('see you soon ' + userName)