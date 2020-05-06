let a = [];

for(let i=0; i<100;++i){
    a[i]=Math.floor(Math.random()*100 +1);
}

function callback(a, b) { 
    if(!a[b]){
        a[b] =0;
    }
    if(a%2==0 & b%2==0){
        a[b]++;
        console.log(a[b]);
            return a + b; 
        }else{
            return a + b; 
        }
  }
 console.log(a.reduce(callback));