let fib=[1,2];

function sumEvenFib(max){
while(fib[fib.length-1]<max){
 let next= fib[fib.length-1]+ fib[fib.length-2];
 fib.push(next);
}

let evenFib= fib.filter(function(number){
return number%2===0;
});

let sum= evenFib.reduce(function(a,b){
    return a+b;   
});
console.log(sum);
}

sumEvenFib(4000000)