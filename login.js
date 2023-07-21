let a=[];  
let b={};
function reg()
{
    var fname=document.getElementById("first");
    var lname=document.getElementById("second").value; 
    var e=document.getElementsByName("gender");
    for(let i=0;i<e.length;i++)
    {
      if(e[i].checked)
      {
        e=document.getElementsByName("gender")[i].value;
      }
    }
    var l1=document.getElementsByName("language1")[0];
    if(l1.checked)
    {
      l1=document.getElementsByName("language1")[0].value;
    }
    else
    {
      l1="not selected";
    }
    var l2=document.getElementsByName("language2")[0];
    if(l2.checked)
    {
      l2=document.getElementsByName("language2")[0].value;
    }
    else
    {
      l2="not selected";
    }

    if((fname.value).length<5||fname.value==null)
    {
        document.getElementById("below").innerHTML="*";
    }
    if(lname<3||lname==null)
    {
        document.getElementById("below1").innerHTML="*";
    }
    var em1=document.getElementById("em1").value;
    const obj=  
    {
        "firstname": fname.value,
        "lastname": lname,
        "email": em1,
        "gender":e,
        "language1":l1,
        "language2":l2
    }
    a.push(obj);
}
function login()
{
  var em=document.getElementById("em").value;
  let i=0;
    if(a[i].email==em)
     {
      alert("welcome");
      b={
        "email":a[i].email
        }
     // document.getElementById("below2").innerHTML="Welcome"+JSON.stringify(a,null,2);
     }
      else
     {
      alert("Please sign up");
     }
  console.log(b.email);
}
