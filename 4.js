let arr=["clash of kings","a an the of"];
let arr1=[];
if(arr.length>0)
{
    arr1.push(arr[1]);
}
let b=arr1.toString().split(" ");
let arr2=arr.slice(0,1);
let arr3=arr2.toString();
let a=[];
a.push(arr3[0].toUpperCase());
for(let i=1;i<arr3.length;i++)
{
    if(arr3[i]===' ')
    {
      a.push(arr3[i]);
      a.push(arr3[i+1].toUpperCase());
      i=i+2;
    }
      a.push(arr3[i].toLowerCase());   
}
let c=a.join('');
c=c.split(' ');
let i=0;
b.forEach((el) => {c.forEach((e2,index,array)=>{

  if(el.toLowerCase()==e2.toLowerCase())
  {
    c[index]=e2.toLowerCase();
    console.log(array);
  }
})});
  

