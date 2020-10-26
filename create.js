const fs=require('fs')

module.exports= function(fileName,data){
let writer=fs.writeFile(fileName+'.json', data, 'utf8', (err) => {
  return 'Fichier'+fileName +'.json bien créé'
});

}