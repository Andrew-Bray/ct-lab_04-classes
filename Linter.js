//import stuff from stack
const Stack = require('./Stack.js');

const linter = (myFunction) => {
    //stringify the function OR turn 
    const verifiedItems = [ '[', ']', '{', '}', '(', ')'];

    const stringifiedFunc = String(myFunction);
    //make it an array
    const arrayedFunc = stringifiedFunc.split("");
    //isolate the (){}[] in the string - .filter
    const strippedArray = arrayedFunc
            .filter(item => verifiedItems.includes(item));

    return strippedArray;
};


const runStack = (myFunction) => {
    //console.log(myFunction);
    const strippedArray = linter(myFunction);
    console.log(strippedArray);
    const openers = ['[', '{', '('];
    const paired = ['[]', '{}', '()']
    let isItAFunction = true

    const stack = new Stack();

    strippedArray.forEach(item => {
        if (openers.includes(item)) {
            stack.push(item);

        } else if (paired.includes(stack.peek() + item)) {
            stack.pop();
        }   else isItAFunction = false;
    });

    console.log("hi", stack.peek());
    if (stack.peek()) {isItAFunction = false};
    
    console.log(isItAFunction);
    return isItAFunction;
};

runStack('dfgd[][[[[[[(');

module.exports = { runStack };