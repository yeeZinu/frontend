let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

let s = a.split(" ");
let b = [];
let m = 0;

for(let i = 0; i<s.length; i++){
    b[m++] = s[i];
}

console.log(s);


/* join 함수를 이용해서 해결
let s = a.split(" ");   //공백 제거
console.log(s.join());  //합침
*/