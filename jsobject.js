// object

    const car = {
        name:   "Fiat",
        model:  500,
        weight: "850kg",
        color:  "white",
        start: function(){
            console.log(this.name + " Car has started. ");
            this.drive();
        },
        drive: function(){
            console.log("Car is driving");
        },
    };
    console.log(car.weight);
    console.log(car['model']);
    car.start();


