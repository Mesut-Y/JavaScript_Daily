let carCounter = 0;
class Car { //OOP yapısı C#, java kadar değil.

    /*
    1-Attributes
    2-Constructor
    3-Functions
    */

    static countCar() { //static fonksiyon ve attribute lere sadece class ulaşabilir.
        return carCounter;
    }

    constructor(brand, model, year, color) { //A class may only have one constructor
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        carCounter++;
    }
    writeAllInfo() {
        console.log(this.brand, this.model, this.year, this.color)
    }
    getBrand() {
        return this.brand;
    }
}

let car1 = new Car("Toyota", "Corolla", 2014, "Velvet Red");
let car2 = new Car("Fiat", "Egea Cross", 2018, "Parlament Blue");
let car3 = new Car("Kia", "Sportage", 2019, "Petrol Green");

car1.writeAllInfo();
console.log(car2.getBrand(), " ", car2.model);
console.log(`İkinci araba bilgileri:
        Markası: ${car2.getBrand()} 
        Modeli ${car2.model}`);

console.log(Car.countCar());
