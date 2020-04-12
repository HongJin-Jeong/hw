let cnt = 0;
let id;

function printTime(msg){
    console.log(msg, new Date());
    cnt++;
    if(cnt==10){
        clearInterval(id);
    console.log(cnt+"회");
    }
}

id = setInterval(printTime, 1000,"1초 간격");
