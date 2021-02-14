
const { Sodas } = require('../db/models')

const { createTransactions } = require('./machine')



async function createSoda(name, description, cost, quantity) {
    try {

        const soda = await Sodas.create({
            productName: name,
            description: description,
            cost: cost,
            quantityAvailable: quantity
        })
        console.log(soda)
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
        return soda
    }
    catch (err) {
        console.log(err)
        return " { Error   : DB error  could not get  Soda  } "
    }
}

async function buySoda(name) {
    try {
        let updatedSoda = await getSodaByName(name)
        if (!updatedSoda)
            return updatedSoda
        if (updatedSoda.quantityAvailable == 0)
            return 'Out of Stock'
        newQuantity = updatedSoda.quantityAvailable - 1;
        await createTransactions(name, updatedSoda.cost)
        await Sodas.update(
            { quantityAvailable: newQuantity }, {
            where: {
                productName: updatedSoda.productName

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


async function deleteSoda(name){
    try{
        await Sodas.destroy({
            where: {
                productName: name
            }
        });

    }
    catch (err) {
        console.log(err)
       return " { Error   : DB error  could not delete Soda   } "
}
}

module.exports = {
    getSodaByName,
    getAllSodas,
    createSoda,
    updateSodaPrice,
    updateSodaQuantity,
    buySoda,
    deleteSoda

}