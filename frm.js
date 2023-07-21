
function myfun()
   {
    var x=document.getElementById("first").value;
    var y=document.getElementById("second").value;
    var res="First name: "+x+"<br>Last name: "+y;
    document.getElementById("below").innerHTML=res;
    document.getElementById("first").value=null;
    document.getElementById("second").value=null;
   }

   //const arr = [{id:1,name:"a"},{id:2,name:"b"}]
   //const name = "b"
   //const tst = arr.find((arr)=>arr.name == "b")
   //console.log(tst,"tst")
