const fs=require('fs')

module.exports= function(filePath){
    let reader=fs.readFileSync(filePath,'utf8');
return reader
}