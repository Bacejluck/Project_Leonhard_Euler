let a = 0
for (let i = 1000; i > 0; i--) {//проходим от 1000 до 1 с помощью цикла и суммируем значения кратные 3 или 5
    if (i % 3 == 0 || i % 5 == 0){
        a += i
    }
}    
console.log(a)

