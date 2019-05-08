/*
Function rules:
1. you only need parentheses to build a functions and to call a function.
2. almost always, you need {} around the function body.
3. usually, you should 'return' from a function.
4. not all functions need to have names

function ideas:
1. They are used for repeated chunks of code, but unlike loops, 
the repeats don't have to happen consecutively.
2. you need parameters in your functions when every time you use
the function, it ccould run in a slightly different way.
*/

function print(number){console.log(number)}

let sampleNum = 10;
print(sampleNum);
//or print(10)
print('Navi');

let print2 = () => {console.log(5)}
print2();

function printPicker(number = 0, firstFunc = print, secondFunc = print2){
    if (number == 0){
        firstFunc();
    } else {
        secondFunc();
    }
}

printPicker(1, print, print2);

function newFunc(param) {console.log(param)};

let firstVar = newFunc;
let secondVar = newFunc;
let thirdVar = newFunc;

firstVar('first output');
secondVar('second output');
thirdVar('third output');

firstVar();
secondVar();
thirdVar();

console.log(firstVar == secondVar);

let firstArrow = () => {console.log(20)};
let secondArrow = () => {console.log(20)};

let firstNum = 10;
let secondNum = 10;

console.log(firstNum == secondNum);

//there are 2 types of values in JS,
//1. primitives: numbers, string, undefined, boolean, symbols
//2. complex: arrays, objects, functions (classes)

//when you check for equality on primitives, you're checking that
//they 'look' the same
//when you check for eqality on complex types, you're checking that they 
//point to the same 'thing'

