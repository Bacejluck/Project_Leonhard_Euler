let a = 0
for (let i = 1000; i % 3 == 0 || i % 5 == 0; i--) {
    a += i
    if (i == 0){
        break
    }
}
alert(a)
