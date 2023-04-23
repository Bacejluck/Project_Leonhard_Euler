let fib=[1,2];

function sumEvenFib(max){// создаем список ,путем сложения двух его последних элементов 
while(fib[fib.length-1]<max){
 let next= fib[fib.length-1]+ fib[fib.length-2];
 fib.push(next);
}

let evenFib= fib.filter(function(number){// создаем переменную которая в качестве значения принимает спикос с четными элементами
return number%2===0;
});

let sum= evenFib.reduce(function(a,b){//сумируем элементы массива путем метода reduce
    return a+b;   
});
console.log(sum);
}

sumEvenFib(4000000)