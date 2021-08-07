function ncommand(content)
{
    //splitting on the basis of \r\n to get an array
    let splArr=content.split("\r\n");

    //iterating over splArr and making necessary changes
    let modContent="";
    for(let i=0;i<splArr.length;i++)
    {
        //breaking if last index is empty to avoid its numbering
        if(i==splArr.length-1 && splArr[i]=="")
        {
            break;
        }
        modContent=modContent+(i+1)+" "+splArr[i]+"\r\n";
    }

    return modContent;
}

module.exports={
    ncomfn:ncommand
}