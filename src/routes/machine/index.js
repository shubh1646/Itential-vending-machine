const { Router } = require('express')

const { getAllTransactions } = require('../../controllers/machine')

const  auth  = require('../../utils/auth')
const route = Router()


route.get('/transactions',auth, async (req, res) => {

    try {
        const transactions = await getAllTransactions()
        if (transactions.length != 0) {
            res.status(200).send(transactions)
        }


        res.status(400).send("No transactions found ")
    }


    catch (err) {
        console.log(err)
        res.status(500).send({
            error: "could not get transiction"
        })
    }
})


module.exports = {
    machineRoute: route
}



