// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

var createCounter = function(init) {
    const initialValue = init;
    return {
        increment: function(){
            return init += 1
        },
        decrement: function(){
            return init -= 1
        },
        reset: function(){
            init = initialValue;
            return init;
        }
    }
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());