class Car{
    constructor(doors , engine , color)
    {
        this.doors = doors;
        this.engine = engine,
        this.color= color
    }
    printCarDetails()
    {
        console.log(`car color is  ${this.color}  and car is ${this.engine}`)
    }
}


let carOne  = new Car(4 , 1600 , "blue")
carOne.printCarDetails();


class Tipo extends Car{
    constructor(doors , engine , color ,wheels )
    {
        // this.doors=doors,
        // this.engine=engine,
        // this.color=color,
        super(doors , engine ,color)
        this.wheels=wheels
    }
}