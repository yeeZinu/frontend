let a = [1, "a", 2, "c", 4, "d", 5, "e", "f", 6, 7]

function countType(a) {

    let num =0;
    let str =0;
    for(let i= 0; i<a.length; i++){
        if(typeof a[i] == "number") {
            num++;
        }
        else{
            str++;
        }
    }
    return console.log("number:%s string:%s",num,str);
}

countType(a);