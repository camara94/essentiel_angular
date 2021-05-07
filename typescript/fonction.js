function helloN(name) {
    return "Hello " + name;
}
var sayHelloH = function (name) { return "Hello " + name; };
var persons = ['Camara', 'Keita', 'Syllah', 'Soumah', 'Sididé', 'Condé', 'Touré'];
persons.map(function (p) { return console.log(sayHelloH(p)); });
