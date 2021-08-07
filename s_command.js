//command for implementing s
let readObj=require("./readFile");
function scommand(content)
{
    //splitting file content on the basis of \r\n
    //internally editor is first using \r to get to staring of line and then \n to get to next line
    let splContent=content.split("\r\n");
    
    //neglecting empty space in splContent and updating content as per our req.
     let modContent="";
    for(let i=0;i<splContent.length;i++)
    {
        if(splContent[i]!="")
        {
            modContent=modContent+splContent[i]+"\r\n\r\n";
        }
    }

    return modContent;
}

module.exports={
    scomfn:scommand
}