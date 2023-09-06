function countTrue (tab)
{
    let sum=0;
    for (let i=0; i<tab.length; i++)
    {
        if (tab[i]==true)
        {
            sum=sum+1;
        }
    }
    return sum;
}

console.log (countTrue([true,false,true,false,true]))