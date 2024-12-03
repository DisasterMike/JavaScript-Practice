// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

var expect = function(val) {
    return {
        toBe: function(otherVal){
            if(val === otherVal){
                return true;
            }else{
                throw "Not Equal";
            }
        },
        notToBe: function(otherVal){
            if(val !== otherVal){
                return true;
            }else{
                throw "Equal";
            }
        }
    }
};

const exp = expect(5);

console.log(exp.toBe(5));
console.log(exp.toBe(4));

// console.log(expect(5).toBe(5));