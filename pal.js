var i;
function fact(n)
{
  var b=1;
  for(i = 1; i <=n;i++)
  {
    b=b*i;
  }
  document.getElementById("res").innerHTML=b;
}
function call()
{
    var n=document.getElementById("one").value;
    fact(n);
    
}
function pal()
{
    var str=document.getElementById("two").value;
    const len=str.length;
    for(let i=0;i<len/2;i++)
    {
        if(str[i]!=str[len-1-i])
        {
            //alert("Not a palindrome");
            return document.getElementById("bruh").innerHTML="It is Not palindrome";
        }
    }
    return document.getElementById("bruh").innerHTML="It is a Palindrome";

}
//console.log(fact(5));