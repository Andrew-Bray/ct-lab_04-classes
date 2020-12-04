class Stack {
    #stack;
    constructor() {
        this.#stack = [];

    }
// put item on top of stack
    push(item) {
        this.#stack.push(item);
    }
// take item off top of stack and return
    pop() {
        this.#stack.pop();
    } 

  // look at the top of stack {
    peek() {
        const topItem = this.#stack[this.#stack.length - 1];
        return topItem;
    }



};

module.exports = Stack;