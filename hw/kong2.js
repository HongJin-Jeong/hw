let a = [];
for(let i=0; i<100;++i){
    a[i]=Math.floor(Math.random()*100);
}

function compareNumber(i, j) {
    return j - i;
}
a.sort(compareNumber);
console.log(a);

  