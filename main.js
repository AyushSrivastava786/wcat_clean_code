let inputArr=process.argv.slice(2);
let readObj=require("./readFile");
let fs=require("fs");
let path=require("path");
let scomObj=require("./s_command");
let ncomObj=require("./n_command");
let bcomObj=require("./b_command");

//separating commands and files into separate arrays
let fileArr=[];
let commandArr=[];
for(let i=0;i<inputArr.length;i++){

    if(inputArr[i].charAt(0)=="-")
    {
        commandArr.push(inputArr[i]);
    }
    else
    {
        fileArr.push(inputArr[i]);
    }

}

     //checking if all the files exist or not
    
         for(let j=0;j<fileArr.length;j++)
         {   let doesExist=fs.existsSync(fileArr[j]);
             if(doesExist==false)
             {
                 console.log("file "+path.basename(fileArr[j])+" does not exist");
                 return;
             }
         }

//getting all files's contents
let content="";
for(let f=0;f<fileArr.length;f++)
{
    content=content+readObj.readfn(fileArr[f])+"\r\n";
}

     
         //checking for commands
for(let com=0;com<commandArr.length;com++)
{

    if(commandArr[com]=="-s")
    {
        content = scomObj.scomfn(content);
    }
    else if(commandArr[com]=="-n")
    {   
        //checking if there's a -b already occured
        let state=0;
         for(let k=0;k<com;k++)
         {
             if(commandArr[k]=="-b")
             {
                 state=1;

             }
         }


         if(state==0)
         {
            content=ncomObj.ncomfn(content);
         }
    }
    else if(commandArr[com]=="-b")
    {

           //checking if there's a -n already occured
           let state=0;
           for(let k=0;k<com;k++)
           {
               if(commandArr[k]=="-n")
               {
                   state=1;
  
               }
           }
  
  
           if(state==0)
           {
              content=bcomObj.bcomfn(content);
           }
    }

}


//printing all the modified content
console.log(content);