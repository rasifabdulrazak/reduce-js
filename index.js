const arr = [5,3,6,4,7]

const output = arr.reduce(function(acc,curr){
    acc = acc + curr;
    return acc;
},0);
console.log(output)