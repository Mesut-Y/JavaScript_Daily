class Vehicle{

    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }
    movement(speed){
        console.log(`${this.brand} marka ${this.model} model aracınız hızı ${speed}`);
    }
}

class Car extends Vehicle{
    
    constructor(brand,model,year){
        super(brand, model);
        this.year = year;
    }
    getYear(){
        return this.year;
    }
}

let car1 = new Car("BMW", "X2", 2020);


console.log(car1);
car1.movement(250);
console.log(`${car1.brand} aracınızın trafiğe çıkış yılı: ${car1.getYear()}`);


