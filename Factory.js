class LOGAN{
    constructor(engine , doors , price )
    {
        this.engine = engine;
        this.doors=doors;
        this.price=price
    }
    returnModelAndPrice()
    {
        return `LOGAN Car price is ${this.price}`
        
    }
}

class KIA {
    constructor(engine , doors , price )
    {
        this.engine=engine;
        this.doors= doors;
        this.price = price;
    }
    returnModelAndPrice()
    {
        return `KIA Car price is ${this.price}`
        
    }
}

//Layer 
class CarFactory{
    constructor(carType)
    {
        this.carType = carType;
    }
    returnCarDetails()
    {
        switch(this.carType)
        {
            case "LOGAN":
                return new LOGAN(1600 , 4 , 200000);
            case "KIA":
                return new KIA(1700 , 4 , 800000);
            default:
                console.log("Invalid Car Name");
        }
    }
}


let KiaCar = new CarFactory("KIA");
let kIADetails= KiaCar.returnCarDetails();
console.log(kIADetails.returnModelAndPrice());