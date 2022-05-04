let count =0;

function printTime() {
    console.log(new Date());
}
    
let interval = setInterval(function() {
    printTime();
    count++;
    if (count === 10) {
      clearInterval(interval);
    }
}, 1000);