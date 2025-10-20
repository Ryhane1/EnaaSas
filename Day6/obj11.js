//1

let etudiant = {
  nom: 'ahmed',
  age: 18,

  sePresenter: function () {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
  },
};
etudiant.sePresenter();

//2
const perso = {
    nom : "Ahmed",
    age : 23,
    metier : "develop",
};

for (const prop in personne){
    console.log(`${prop}: ${perso[property]}`);
}