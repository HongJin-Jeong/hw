
function sum(a,b) {

    return a+b;
}

function test_sum() {
    let a = [];
    for(let x=0;x<5;++x){
        a[x]=Math.floor(Math.random()*10);
    }
    console.log(a);
    let sum2 = a.reduce(sum);
    return sum2;
}
for(let i=0;i<5;++i){
    console.log(test_sum());
}