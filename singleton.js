// to create one object 
instance = null;   //as aglobal in window object
class printer{
    constructor(printerName , printerColor)
    {
        if(instance == null){
            this.printerName=printerName,
            this.printerColor=printerColor
            instance=this
        }
        else{
            return instance ;
        }
    }
}
let printerOne = new printer("HP" , "white")
let printerTwo = new printer("Dell" , "Black")


console.log(printerOne);
console.log(printerTwo);