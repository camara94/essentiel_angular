class MyClass {
    prop1;
    constructor(param) {
        this.prop1 = param;
    }
    methode1() {
        this.prop1 = 'Hello'
    }
}

other = new MyClass("Camara Laby Damaro");

console.log(other.prop1);