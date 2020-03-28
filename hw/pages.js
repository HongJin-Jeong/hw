let studentCount = 31;
let pageSize = 10;
let result;
if(studentCount%pageSize!=0){
    result = parseInt(studentCount/pageSize)+1;
}else{
    result = parseInt(studentCount/pageSize);
}
console.log(result);