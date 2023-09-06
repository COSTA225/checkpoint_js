function getBudgets (tab){
    let sum=0;
    for (let i=0;i<tab.length;i++)
    {
        sum=sum + tab[i].budget
    }
    return sum;
}
console.log(getBudgets([{budget: 100} , {budget: 80}]));