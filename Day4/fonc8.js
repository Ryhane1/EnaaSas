function nombrmultip(tab, value) {

    let Tableau1 = tab ;

    let Tableau2 = value ;
 

   let Tableau3 = Tableau1.concat(Tableau2);

return Tableau3;
}
const tab = [ 1, 2, 3, 3, 4, 3, 4];
const value = [ 10, 34, 9, 36, 56, 6, 9];

console.log(nombrmultip(tab, value));


