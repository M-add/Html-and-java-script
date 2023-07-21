var str="Dream big acive big";
//console.log(str.length);
var str1=[];
for(let i=0; i<str.length; i++)
{
   if(str[i]!==' ')
   {
    if(i%2===0)
    {
        str1.push(str[i].toUpperCase());
    }
    else if(i%2!==0)
    {
        str1.push(str[i].toLowerCase());
    }
  }
  else if(str[i]===' ')
  {
    str1[i]=' ';
  }   
}
console.log(str1.join(''));
