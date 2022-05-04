// 빈배열 2개 생성
let s = [];     // 난수 100개 저장 배열
let a = [];     // 홀수만 저장 배열

// for 문으로 난수 100개 생성
for (let i = 0; i<100; i++){
    s[i] = Math.floor(Math.random()*100);
}

let m = 0;      // 홀수배열 인덱스용 변수
for (let n = 0; n<100; n++){
    if (s[n] % 2 != 0){
        a[m++] = s[n];
    }
}

console.log(a); //출력