let a = [];
for(let i=0;i<100;++i){
    a[i]=Math.floor(Math.random()*100);
    
}

function callback(a, b) {
    if(a%2==0 & b%2==0){
    console.log(a + ", " + b); 
        return a + b; 

    }else{
        return a + b; 
    }
 
  }
  
let sum = a.reduce(callback);
console.log(sum);
