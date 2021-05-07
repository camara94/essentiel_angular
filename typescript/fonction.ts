function helloN(name: string) {
    return "Hello " + name;
}

let sayHelloH =  (name): string => "Hello " + name;

const persons:string[] = ['Camara', 'Keita', 'Syllah', 'Soumah', 'Sididé', 'Condé', 'Touré'];
persons.map( p => console.log(sayHelloH(p)) );
