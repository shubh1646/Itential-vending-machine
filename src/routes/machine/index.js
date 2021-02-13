const { Router } = require('express')

const { getAllTransictions } = require('../../controllers/machine')


const route = Router()


route.get('/', async (req, res) => {

    try {
        const transictions = await getAllTransictions()
        if (transiction.length != 0)
            res.status(200).send(transictions)

        res.status(400).send("No transiction found ")
    }


    catch (err) {
        console.log(err)
        res.status(500).send({
            error: "could not get transiction"
        })
    }
})


module.exports = {
    machineRoute : route
}



