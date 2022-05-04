// 아래문장에서 모음의 위치를 출력하는 코드 구현
let a = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be."

let b = a.replace(/[aeiou]/gi,"o");     // 모음을 o로 바꾸는 정규식

for(let n = 0; n < b.length;){          // b의 길이만큼 반복
    if(b.indexOf("o", n) == -1){        // o를 찾지 못했다면
        n++;                            // n++
        break;                          // 반복 중단
    }
    else{                               // o를 찾았다면
        console.log(b.indexOf("o", n)); // o출력
        n = b.indexOf("o",n)+1;         // 중복 제거
    }

}

/*  외 안댐?          
for(let i = 0; i < b.length; i++){      // b의 길이만큼 i반복
    if(b.indexOf("o", i) == -1){        // 만약 i번째에 o가 없다면
        break;                          // 반복 중단
    }
    else{
        console.log(b.indexOf("o", i)); // i번째의 o인덱스 출력
    }
} 
*/

/*
for(let i = 0; i < b.length; i++){
    if(b.indexOf("o", i) != -1){
        console.log(b.indexOf("o", i));
    }
}
*/


/* 갑자기 든 의문
만약 인덱스값이 -1이라면 어떻게 해결해야하지? 
그냥넘어가나?
그냥 무시하고 넘어갈 수 있나? 
break를 중간에 따로 넣어줘야하나? 
그러면결국에 i++은 따로 넣어줘야하는거아닌가?
*/