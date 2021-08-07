//this is for reading the file content
let fs=require("fs");
let path=require("path");

function read(pth)
{
   if(pth == undefined)
   {
       console.log("invalid path entered 🙏");
       return;

   }   
//reading file
   let content=fs.readFileSync(pth);
   return content;

}

module.exports={
    readfn:read
}