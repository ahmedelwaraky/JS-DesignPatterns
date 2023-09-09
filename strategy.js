class UPS {
    calculateShipmentPackage(shipmentPackage) {
        return '50$';
    }
}

class FEDEX {
    calculateShipmentPackage(shipmentPackage) {
        return '70$';
    }
}

class Shipping {
    setStrategy(company) {
        this.company = company;
    }
    
    calculateShipmentPackage(shipmentPackage) {
        return this.company.calculateShipmentPackage(shipmentPackage);
    }
}

  // Details
var shipmentPackage = {
    "from": "Assiut",
    "to": "Menofia",
    "weight": "3kg"
};
//UPS Company 
    var ups = new UPS();
    var shipping = new Shipping(); // Fix the class name here
    shipping.setStrategy(ups); // Fix the typo here
    console.log(shipping.calculateShipmentPackage(shipmentPackage));


    // FEDEX Company 
    var fedex = new FEDEX();
    var shipping = new Shipping();
    shipping.setStrategy(fedex)
    console.log(shipping.calculateShipmentPackage(shipmentPackage));
    