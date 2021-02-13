
const { Sodas } = require('../db/models')





//create a prodcut
async function createSoda(name, description, cost, quantity) {
    try {
        
        const soda = await Sodas.create({
            productName: name,
            description: description,
            cost: cost,
            quantityAvailable: quantity
        })
        return soda
    }

    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not create Soda  } "
    }

}



async function getAllSodas() {
    try {
        const sodas = await Sodas.findAll()
        return sodas
    }

    catch (err) {
        console.log(err)
        return " { Error   : DB error could not get All Sodas  } "
    }
}

//get all products 
async function getSodaByName(name) {



    try {
        const soda = Sodas.findOne({

            where: {
                productName: name

            }
        })
    }
    catch (err) {
        console.log(err)
        return " { Error   : DB error  could not get  Soda  } "
    }
}

async function buySoda(name){
try{
    let updatedSoda  = getSodaByName(name)
    if(!updatedSoda)
        return updatedSoda
    newQuantity = updatedSoda.quantityAvailable-1;
    let updatedSoda = await Sodas.update(
        {productName : updatedSoda.productName},{
            where : {
                quantityAvailable : newQuantity
            }
        }
    )
    return updatedSoda
}
    catch (err) {
        console.log(err)
        return " { Error   : DB error  could not update Soda quantity  } "
    }
}


async function updateSodaPrice(name, cost) {

    try {
        let updatedSoda = await Sodas.update(
            { cost: cost }, {
            where: {
                productName: name
            }
        }
        )

        return updatedSoda
    }

    catch (err) {
        console.log(err)
        return " { Error   : DB error  could not update Soda Price  } "
    }
}


async function updateSodaQuantity(name, quantity) {
    try {
        let updatedSoda = await Sodas.update(
            { quantityAvailable: quantity }, {

            where: {
                productName: name
            }
        }
        )
        return updatedSoda
    }
    catch (err) {
        console.log(err)
        return " { Error   : DB error  could not update Soda Quantity  } "
    }
}

module.exports = {
    getSodaByName,
    getAllSodas,
    createSoda,
    updateSodaPrice,
    updateSodaQuantity,
    buySoda

}