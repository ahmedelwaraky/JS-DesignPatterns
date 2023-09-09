class Swimmer {
    constructor(name , country)
    {
        this.name = name;
        this.country = country;
    }
    returnSimmerName()
    {
        console.log(this.name);
    }
    returnSimmerCountry()
    {
        console.log(this.country);
    }
}

let swim ={
    setSwimProperties(speed , direction){
        this.speed = speed;
        this.direction=direction;
    },
    getSwimProperties(){
        console.log(`Swimmer Name is ${this.name} and Swimming ${this.speed}`);
        ;
    }
}

Object.assign(Swimmer.prototype ,swim);
let swimmerOne = new Swimmer("ahmed" , "Egypt")
swimmerOne.setSwimProperties(120 ,'up')
swimmerOne.getSwimProperties();