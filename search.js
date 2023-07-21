let arr = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
];
function sea()
{
    let a=document.getElementById("p").value;
    var b=arr.includes(a);
    if(b)
    {
      document.getElementById("print").innerHTML="present";
    }
    else
    {
      document.getElementById("print1").innerHTML="not present";
    }
}
