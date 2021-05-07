var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, age) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
    }
    Personne.prototype.afficherInfo = function () {
        console.log("Nom: " + this.nom);
        console.log("Pr\u00E9nom: " + this.prenom);
        console.log("Age: " + this.age);
    };
    return Personne;
}());
var Adresse = /** @class */ (function () {
    function Adresse(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    Adresse.prototype.voir = function () {
        console.log('latitude: ' + this.lat + '\nLongitude: ' + this.long);
    };
    return Adresse;
}());
var Etudiant = /** @class */ (function (_super) {
    __extends(Etudiant, _super);
    function Etudiant(nom, prenom, age, cin) {
        var _this = _super.call(this, nom, prenom, age) || this;
        _this.nom = nom;
        _this.prenom = prenom;
        _this.age = age;
        _this.cin = cin;
        return _this;
    }
    Etudiant.prototype.afficherInfo = function () {
        console.log("*************Etudiant************");
        _super.prototype.afficherInfo.call(this);
        console.log('CIN: ' + this.cin);
    };
    return Etudiant;
}(Personne));
var p = new Etudiant('CAMARA', 'Laby Damaro', 28, '8857541');
var p2 = new Personne();
p2.nom = 'CAMARA';
p2.prenom = 'Mawatta';
p2.age = 45;
var aa = new Adresse(1.53, -9.5);
p.afficherInfo();
p2.afficherInfo();
aa.voir();
