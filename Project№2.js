var a = 1
var b = 2
var summ = 2
for (let x = 0 ; x < 4000000 ; x = a + b){
    if (a > b){
        b = a + b
        if (b % 2 == 0){
            summ += b
        }
    }
    if (a < b){
        a = a + b
        if (a % 2 == 0){
            summ += a
        }
    }
}
console.log(summ)
