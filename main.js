const fs=require('fs')
const path= require ('path')
const read=require('./reader')
const write=require('./create')
let filePathRead=read(process.argv[2])
let contentFile
function parseINI(filePathRead) {
    
}

function parseENV(filePathRead) {
    let regexComment=/[# ].*/g;
    let regexBefEq=/(.*)[=]/g;
    let regexAftEq=/[=](.*)/g;
    //let regexFileSansComment=/^[^(#)].*[^\r]/gm;
    let regStart=/^[\r]*/gm
    let regEnd=/.*[[:>:]]/g
    let regEq=/=/gm
    let content,contentBef
    contentFile=filePathRead
    //content=contentFile.match(regexFileSansComment)
    content=contentFile.replace(regexComment,'')
    //contentFile=contentFile.replace(regexComment,'')
    contentBef=content.replace(regexAftEq,'')
    contentAft=content.replace(regexBefEq,'')
    contentFileSansEq=content.replace(regEq,'":"')
    
    contentFileNew = contentFileSansEq.replace(regStart,'"')
    contentFileFinal=contentFileNew.replace(regEnd,'"')
    //console.log(contentFileFinal);
    let fileName=write(process.argv[2],contentFileFinal)
    console.log(write);
}

parseENV(filePathRead)
// regex comment /^[^(#)].*[^\r]/gm 
// regex beforeEqual /(.*)[=]/g
// regex afterEqual /[=](.*)/g
// replace = p.replace('=', ':') ||  regexEq= /=/g     fileRead.replace(regexEq, ':')