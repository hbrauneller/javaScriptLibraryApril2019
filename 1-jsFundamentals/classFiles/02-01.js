for (let i = 0; i < 10; i++) {
    console.log(i);
}

//for-in example 1
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log(thing); //this output shows the position numbers of the elements
//in the array
}

//For-in example 2
let parentThing = [1, 'Tracy', false, {key: 'playing'}];
for (let thing in parentThing){ //enumerable collections
console.log(parentThing[thing]); //this output shows the elements in the array
}

//For-in example 3
let obj = {keyA: true, keyB: 'Alan', keyC: [1,2,3]};
for (let placeholder in obj){
    console.log(obj[placeholder]);
    console.log(obj['keyA']);
}

let obj2 = {first: '1150 Academy', second: 1150, third: false}
for (let ph2 in obj2){
    console.log(obj2[ph2]);
}

/*Challenge 1:
Write a for loop that loops 10 times.  Every time the loop is run, it calls a function.  The function should
console.log a random number between 5 and 7.  Once you've completed the challenge with a for-loop, see if
you can make this work with a for-of loop.  If you can solve that problem, see if you can solve this with
a for-each loop.  Note that for-of and for-each loops require slightly different conditions to work than
a for loop requires.
*/

for (let i = 0; i < 10; i++) {
    randNumber();
}
function randNumber(){
    console.log(Math.random());
}

//mini-challenge
//make a function that takes 2 parameters: favorite food & favorite dessert.
//your function should return a sentence with those 2 params inside.

// function food(favFood, favDessert){
//     return `My favorite food is ${favFood} and my favorite dessert is ${favDessert}.`
// }

// console.log(food('pizza', 'peach pie'));

// //demonstrate
// function first(inputFunction){
//     inputFunction();
// }
// function second(){
//     console.log('functions are amazing, but also hard!');
// }
// first(second);

// Challenge 2:
// Let's compose functions!  Your first function should take a function as input and return that function
// with a function call.  Your second function should take a string as input and return that string with 
// extra stuff added to that string.  Console.log the results of your function calls.  Additional information
// is below to help clarify what you're doing (the below is just an example):
// first function: input-secondFunc output-secondFunc('coding is great!')
// second function: input-'coding is great!' output-'coding is great!  pie is, too!'

function challenge(input){
    console.log('Functions are way confusing');

}
function func2(){
    console.log('Multiple functions are even more confusing');
}
challenge(func2);

/*
answer:
function firstFunc(funcParam){
    funcParam('coding is great!');
}

function secondFunc(str){
    return str + 'pie is too!'
}

console.log(firstFunc(secondFunc))
*/

/*challenge 3
make 2 functions. the first function takes a function as input, and calls that input function 
with a number value. The second function takes a number as input, and constenates that
number with a string. The second function should return the concatenation. the first 
function should return the call.
*/

function three(num){
    num(34);
}

function three2(string){
    return string + ' people went on vacation.'
}

console.log(three(three2));

// function func1(input){   //'input' refers to 'func2' from line 118
//     return input(5);     //input(5) is the same as 'return num + ':I am a number'
// }

// function func2(num){     //func2 only runs because of func1
//     return num + ': I am a number'
// }
// console.log(func1(func2));



