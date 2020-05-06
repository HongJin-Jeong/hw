let a1 = [];
let j =0;
let k=1;

for(let i=0;i<3;++i){
    a1[i]=[j,k];
    j=j+2;
    k=k+2;
}
let a2=a1;
a1[0][0]=100;

console.log(a1);
console.log(a2);