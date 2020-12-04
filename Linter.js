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

const openers = ['[', '{', '('];
const paired = ['[]', '{}', '()']

const stack = new Stack();



strippedArray.forEach(item => {
    if (isOpeningBracket(item)) {
        stack.push(item);
    } else stack.push(item);
});

    // includes push, pop, and peek through some if thens
        // if the next item is a match with the last one (peek)

        // if (stringifiedFunc[i] === newStack.peek()) {
        //     newStack.pop()
        // } else {
        //     newStack.push(stringifiedFunc[i])
        // }

        // (pop) the last one 

        // else (push) the next item

    //in the end the #stack should end up empty, if it does return true, otherwise return false


linter('dfkj{{{}}}{}{}{}{))(())[[][dhfgkjdf');

module.exports = linter;