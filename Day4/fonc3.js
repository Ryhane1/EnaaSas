function nombrinvers(tab) {

let Tableau = [] ;


  for (let  i = tab.length; i >= 0; i--) {

    
    Tableau.push(tab[i]);
  
     
  }

return Tableau;
}

const value = [ 1, 2, 3, 3, 4, 3, 4 ];
console.log(nombrinvers(value));



