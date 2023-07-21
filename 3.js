let arr=[1,2,3,0,4,0,6,0,9];
  let zeros = [];
  let others = [];
  for (let i = 0; i < arr.length; i++) 
  {
    if (arr[i] == 0)
    {
      zeros.push(arr[i]); 
    } 
    else
    {
      others.push(arr[i]);
    }
  }
  var res = others.concat(zeros);
  console.log(res);
