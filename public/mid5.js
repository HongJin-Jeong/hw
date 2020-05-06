let a = [ "hello.html", "world.js", "readme.txt" ];

function getExtension(filename) {
 
    let filelength = filename.length;
    let fileDot = filename.lastIndexOf('.');
 
    let FilenameExtension = filename.substring(fileDot, filelength).toLowerCase();
 
    return FilenameExtension;
}
for(let i=0;i<3;++i){
    console.log(getExtension(a[i]));
}
