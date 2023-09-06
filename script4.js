function objectToArray (obj)
{
    let resultTab= [];
    for(let i in obj)
    {
        resultTab.push([i,obj[i]]);
    }
    return resultTab;
}
console.log(objectToArray({
    D: 1,
    B: 2,
    C: 3
}))