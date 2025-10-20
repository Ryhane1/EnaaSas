function multiptableau (tab) {

let somme = 1 ;

for ( let i=0 ; i < tab.length ; i++)
{

somme = somme * tab[i];
}
return somme;
}

const value = [ 1, 2, 3, 4];
console.log(multiptableau(value));