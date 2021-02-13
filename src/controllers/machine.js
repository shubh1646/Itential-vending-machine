const { Transactions } = require('../db/models')



async function  getAllTransactions() {
    try {
        let transaction = await  Transactions.findAll()
        return transaction 
    }

    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not get transiction    } "
    }
}

async function  createTransactions(productName,cost){
    try{
        await  Transactions.create({
            productName : productName,
            transactionCost : cost 
        })
        
    }
    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not register transiction  } "
    }
}

module.exports = {
    getAllTransactions,
    createTransactions
}
