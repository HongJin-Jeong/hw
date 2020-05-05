let a = [];
for(let i=0; i<100;++i){
    a[i]=Math.floor(Math.random()*100 +1);
}

function compareNumber(i, j) {
    return i - j;
}
a.sort(compareNumber);
console.log(a);

  