function validate() 
        {
            var x = document.forms["myForm"]["name"]["Email"]["Phone number"]["Father name"]["Mother name"]["DOB"].value;
            if (x == null || x == "") {
                alert("Name must be filled out");
                return false;
            }
        
        }
    // {
    //     var id=document.getElementById("1").value;
    //     var x=document.getElementById("1").value;
    //     if(x == null||isNaN(x))
    //     {
    //         console.log("Name must be filled out");
    //         return false;
    //     }
    //     return true;
    // }
        