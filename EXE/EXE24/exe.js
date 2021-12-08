function Car(brand, speed){
    this.brand = brand;
    this.speed = speed;
}

Car.prototype.accelerate = function(){
    this.speed += 10;
    console.log(this.speed)
}

Car.prototype.brake =function(){
    this.speed -= 5;
    console.log(this.speed);
}


const CAR1 = new Car('BMW', 120);
const CAR2 = new Car('Mercedes', 95)

console.log(CAR1.accelerate(), CAR1.brake());
console.log(CAR2.accelerate(), CAR2.brake());


[new Car('BMW', 129), new Car('Mercedes',95)].forEach((car)=>{
    car.accelerate();
    car.brake();
    console.log(car)
})


class CarC {
    constructor(brand, speed){
        this.brand = brand;
        this.speed = speed;
    }
    accelerate(){
        this.speed +=10;
        console.log(this.speed)
    }
    brake(){
        this.speed -=5;
        console.log(this.brand)
    }
}
[new CarC('BMW', 129), new CarC('Mercedes',95)].forEach((car)=>{
    car.accelerate();
    car.brake();
    console.log(car)
})
