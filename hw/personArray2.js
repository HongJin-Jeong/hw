let persons1 = [];

for(let i = 0 ; i<10 ; ++i){
    persons1[i]=[{name:"홍길동", age:16 + i}]
    let persons2 = [];
    persons2[i]=persons1[i];
    console.log(persons1[i]==persons2[i]);
}

for(let j=0; j<10 ; ++j){
    let persons2 =[];
    persons2[j]=persons1[j];
    console.log(persons2[j]);
}