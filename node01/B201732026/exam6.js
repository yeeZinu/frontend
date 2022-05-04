let a = ["c:/temp/guide.hwp", "c:/pj/frontend/chap05/substring1.js", "homework.docx"]

for(let n = 0; n<a.length; n++){
    a[n].match(/[a-z]|./i);
    if(a[n].lastIndexOf("/") == -1){
        console.log(a[n].slice(0));
    }
    else{
        console.log(a[n].slice(a[n].lastIndexOf("/")+1));
    }
}