let a=[1,2,3,-4,-5,6,7,8,9,-10,-11];
a.forEach((element,index)=> {
    if(element!==-element)
    {
        a[index] =-element;
    }
    else
    {
        a[index]=element;
    }
});
console.log(a);