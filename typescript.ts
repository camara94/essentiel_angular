let a: number = 5;
let sayHellos = (name: string): string => 'Hello ' + name;

interface User {
    id: number;
    name: string;
}


let user: User = {id: 1, name: 'Laby Damaro Camara'};

console.log(sayHellos('Laby Damaro'));