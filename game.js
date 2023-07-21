const arr=[
    {
      "id": 1,
      "game": "cricket",
      "explation":"Most popular game"
    },
    {
        "id": 2,
        "game": "hockey",
        "explation":"A good game"
    },
    {
        "id": 3,
        "game": "football",
        "explation":"use's phisical abilities to the full set"
    },
    {
        "id": 4,
        "game": "tennis",
        "explation":"A intens game"
    },
    {
        "id": 5,
        "game": "archery",
        "explation":"game of accuracy"
    },
    {
        "id": 6,
        "game": "carrom",
        "explation":"A fun game"
    }
  ]
  let g,b;
  var i=0;
  function sport()
  {
    g=arr.map(array=>array.game);
    for(i=0;i<g.length;i++)
    {
        document.getElementById("print").innerHTML+="<button onclick=exp(\'"+g[i]+"\')>"+g[i]+"</button>"+"<br>";
    } 
  }
function exp(b)
{
    arr.forEach((values)=>{
        if(b==values.game)
        {
            document.getElementById("print1").innerHTML=JSON.stringify(values.explation);
        }
    });
}