class Personne 
{
    nom: string;
    prenom: string;
    age: number;
    afficherInfo(){
        console.log( `Nom: ${this.nom}` );
        console.log( `Prénom: ${this.prenom}` );
        console.log( `Age: ${this.age}` );
    }
}

let p = new Personne();
p.nom = 'CAMARA';
p.prenom = 'Laby Damaro';
p.age = 27;

p.afficherInfo();