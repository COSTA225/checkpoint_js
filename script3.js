function getAbsSum(arr)
{
    let sum = 0;
    for(let i=0;i<arr.length;i++) {
        sum = sum + Math.abs(arr[i]); 
    }
    return sum;
}
console.log(getAbsSum([1,3,-4]))