let a = [];
let cnt =0;
for(let i=0; i<100;++i){
    a[i]=Math.floor(Math.random()*100 +1);
}

function callback(a, b) {
    if(a%2==0 & b%2==0){
        cnt++;
        console.log(cnt);
            return a + b; 
        }else{
            return a + b; 
        }
  }
 console.log(a.reduce(callback));