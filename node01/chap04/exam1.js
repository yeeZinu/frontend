function doSomething(a, b, c) {
    let max = 0;
    let k = [a,b,c];
    for(let i of k){
        if(max<i){
            max = i;
        }
    }
    return max;
    
    
}
console.log(doSomething(3, 1, 2));
console.log(doSomething(1, 2, 3));
console.log(doSomething(1, 3, 2));

let s = "one, two three four five "
console.log(s.replace(/\s/g,""));