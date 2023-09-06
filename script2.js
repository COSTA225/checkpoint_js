function filterarray(tab)
{
    let arr=[];
    for (let i=0; i<tab.length; i++)
    {
        if (typeof tab[i]=="number")
        {
            arr.push(tab[i]);
        }
    }
    return arr;
}
console.log(filterarray(['12',2,'46',5,-2]))