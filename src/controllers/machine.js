const { Transictions } = require('../db/models')



async function getAllTransictions() {
    try {
        let transiction = await  Transictions.findAll()
        return transiction
    }

    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not get transiction    } "
    }
}

async function  createTransiction(productName,cost){
    try{
        await  Transictions.create({
            productName : productName,
            transictionCost : cost 
        })
        
    }
    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not register transiction  } "
    }
}

module.exports = {
    getAllTransictions,
    createTransiction
}
