let a = 0
for (let i = 1000; i > 0; i--) {
    if (i % 3 == 0 || i % 5 == 0){
        a += i
    }
}    
console.log(a)

