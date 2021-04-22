function hello(name) {
    return "Hello " + name;
}

let sayHello =  name => "Hello " + name;

const persons = ['Camara', 'Keita', 'Syllah', 'Soumah', 'Sididé', 'Condé', 'Touré'];
persons.map( p => console.log(sayHello(p)) );
