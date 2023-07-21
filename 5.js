number([[10,0],[3,5],[5,8]]);
function number(busStops)
{
    let totalEntries = 0
    let totalDowns = 0
  
    busStops.map((arr)=> { 
      totalEntries += arr[0] 
      totalDowns += arr[1]
    })
    console.log( totalEntries-totalDowns);
}
