function removeRight(a, count) {
    for(let i = 0; i<count; i++){
        a.pop();
    }
    return a;
}

let a = [0, 1, 2, 3, 4]
removeRight(a, 2)
console.log(a)
    