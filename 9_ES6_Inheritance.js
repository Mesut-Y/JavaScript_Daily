class Vehicle {

    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    movement(speed) {
        console.log(`${this.brand} marka ${this.model} model aracınız hızı ${speed}`);
    }
}

class Car extends Vehicle {

    constructor(brand, model, year) {
        super(brand, model);
        this.year = year;
    }
    getYear() {
        return this.year;
    }
}

class Motorcycle extends Vehicle {

    constructor(brand, model, color) {
        super(brand, model);
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}

let car1 = new Car("BMW", "X2", 2020);
let motor1 = new Motorcycle("Honda", "CL250", "blue");

console.log("----------- vehicle sınıfından kalıtım almış Car sınıfı nesnesi ------------");
console.log(car1);
car1.movement(250);
console.log(`${car1.brand} aracınızın trafiğe çıkış yılı: ${car1.getYear()}`);

console.log("----------- vehicle sınıfından kalıtım almış Motorscyle sınıfı nesnesi ------------");
console.log(motor1);
motor1.movement(200);
console.log(`${motor1.brand} aracınızın trafiğe çıkış yılı: ${motor1.getColor()}`);


