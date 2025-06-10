class MinStack {
    #stack;
    #minStack;
    constructor() {
        this.#stack = [];
        this.#minStack = [];
    }
    push(item) {
        this.#stack.push(item);
        if (item <= (this.getMin() ?? Infinity)) {
            this.#minStack.push(item);
        }
    }
    pop() {
        if (this.top() === this.getMin()) {
            this.#minStack.pop();
        }
        this.#stack.pop();
    }
    top() {
        return this.#stack[this.#stack.length - 1];
    }
    getMin() {
        return this.#minStack[this.#minStack.length - 1];
    }
}

const main = () => {
    const actions = ["push", "push", "push", "getMin", "pop", "top", "getMin"];
    const values = [[-2], [0], [-3], [], [], [], []];
    const res = [];
    const minStack = new MinStack();
    actions.forEach((action, index) => {
        const actionRes = minStack[action](...values[index]);
        res.push(actionRes);
    });
    console.log(res);
};

main();
