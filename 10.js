let a=9119;
console.log(sqr(a));
function sqr(n) 
{
  let sum=0;
  let b="";
  n=n.toString();
  for(let i=0;i<n.length;i++)
  {
    sum=n[i]*n[i];
    b+=sum;
  }
  return parseInt(b);
}