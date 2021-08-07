function bcommand(content)
{
    //splitting on the basis of \r\n to get an array
    let splArr=content.split("\r\n");

    //iterating over splArr and making necessary changes
    let modContent="";
    let count=1;
    for(let i=0;i<splArr.length;i++)
    {
        //checking if index is empty to avoid its numbering
        if(splArr[i]!="")
        {
            modContent=modContent+(count)
            count++;
        }
        modContent=modContent+" "+splArr[i]+"\r\n";
    }

    return modContent;
}

module.exports={
    bcomfn:bcommand
}