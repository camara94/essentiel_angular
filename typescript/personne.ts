export class Personne 
{
    nom: string;
    prenom: string;
    age: number;

    constructor(nom?: string, prenom?: string, age?: number)
    {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }

    afficherInfo(){
        console.log( `Nom: ${this.nom}` );
        console.log( `Prénom: ${this.prenom}` );
        console.log( `Age: ${this.age}` );
    }
}

export class Adresse {
    constructor(public lat: number, public long: number){}
    voir():void {
        console.log('latitude: ' + this.lat + '\nLongitude: ' + this.long)
    }
}


export class Etudiant extends Personne {
    constructor( public nom: string, public prenom: string, public age: number, public cin: string ){
        super(nom, prenom, age);
    }

    afficherInfo(): void {
        console.log("*************Etudiant************");
        super.afficherInfo();
        console.log('CIN: ' + this.cin);
    }
}

let p = new Etudiant('CAMARA', 'Laby Damaro', 28, '8857541');
let p2 = new Personne();
p2.nom = 'CAMARA';
p2.prenom = 'Mawatta';
p2.age = 45;

let aa = new Adresse(1.53, -9.5);

p.afficherInfo();
p2.afficherInfo();
aa.voir()