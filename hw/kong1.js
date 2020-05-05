let a = [];
let sum =0;
let avg =0;
for(let i=0; i<100;++i){
    a[i]=Math.floor(Math.random()*100);
    sum = sum + a[i];
}
avg = sum/100;
console.log(avg.toFixed(1));