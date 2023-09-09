class LOGAN{
    constructor(engine , doors , price )
    {
        this.engine = engine;
        this.doors=doors;
        this.price=price
    }
    returnModelAndPrice()
    {
        console.log(`LOGAN Car price is ${this.price}`);
        
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
        console.log(`KIA Car price is ${this.price}`);
        
    }
}

let kia = new KIA(1600 ,4 , 100000)
console.log(kia);
