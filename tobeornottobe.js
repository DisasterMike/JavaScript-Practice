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