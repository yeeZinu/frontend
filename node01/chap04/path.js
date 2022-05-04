let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]

for(let i = 0; i<a.length; i++){
    a[i].match(/\.a-z/i);
    console.log(a[i].slice(a[i].indexOf(".")));
}

for(let n = 0; n<a.length; n++){
    a[n].match(/[a-z]|./i);
    if(a[n].lastIndexOf("/") == -1){
        console.log(a[n].slice(0));
    }
    else{
        console.log(a[n].slice(a[n].lastIndexOf("/")+1));
    }
}

for(let m = 0; m<a.length; m++){
    a[m].match(/\.a-z/i);
    console.log(a[m].slice(a[m].lastIndexOf("/")+1, a[m].indexOf(".")));
}


/* 고민의 흔적들
배열에다가는 match가 적용이안된다는것을
몇시간동안 고민하고 안되다가 알아냄;

포문돌려서 하나하나 찾아봐야되든디?

한번에 a 출력하면 문장 앞뒤로 '없애고싶음;;

str형에서만 match가 가능하다면 
for문을 돌려서 내부에 각각 매치를 돌려주고
새로운 배열에다가 정렬해서 
출력하면 되지않을까?

아아아아 좋아요~~되네요~~
윗줄이 변경이되면 아랫줄도된답니다~
위에서 아래로 순으로 읽거든요!

네! 굳이 배열을 새로만들필요는 없네요!
그냥 출력만 안한다면 해결이 된답니다.

해당되는 문자열의 일부분만 출력하고싶은데
방법을 찾아야할듯함;;

.이 시작되는부분들의 인덱스를 받아서 
slice쓰면 되려나?
-> 됨!

근데 여기서 문제!
파일명은 어떻게 출력하지?
/[a-z]|./i의 조건으로 찾는다고 생각하면 
다나올텐데?

파일은 폴더의 최하위에있으니까
/이후의 내용만 출력하면됨! 

아 킹갓 슬라이스 사랑합니다.
*/

/*
자고일어나보니 정규식으로 풀려고 한참머리쓰려다가 저렇게한거라
다시 정규식으로 풀어보기로함
근데 출력이좀 그럼;;()써도 안됨;; 하우투?

for(let i =0; i<a.length; i++){
	console.log(a[i].match(/\.[a-z]+/));
}

for(let n = 0; n<a.length; n++){

	console.log(a[n].match(/[a-z|0-9]+\.[a-z]+/));
}

for(let m = 0; m<a.length; m++){
	if(!a[m].match(/\/[a-z|0-9]+/)){		// 앞에 /가 없는 경우만
		console.log(a[m].match(/[a-z]+/));
  }

  else{										// 앞에 /가 있는 경우만
    console.log(a[m].match(/([a-z|0-9]+\.)/));
  }
}
*/
