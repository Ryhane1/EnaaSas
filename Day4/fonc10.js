function nombraddit(tab) {

    let Tableau = [] ;


for (let i = 1; i <= 10; i++) {
    let somme  = 0 ;

 somme  = tab * i;
 
{
    Tableau.push(somme);
}
}
return Tableau;
}
const value = [ 4];
console.log(nombraddit(value));



