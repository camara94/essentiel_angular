var Personne = /** @class */ (function () {
    function Personne() {
    }
    Personne.prototype.afficherInfo = function () {
        console.log("Nom: " + this.nom);
        console.log("Pr\u00E9nom: " + this.prenom);
        console.log("Age: " + this.age);
    };
    return Personne;
}());
var p = new Personne();
p.nom = 'CAMARA';
p.prenom = 'Laby Damaro';
p.age = 27;
p.afficherInfo();
