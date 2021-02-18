const { Router } = require('express')


const { getSodaByName,
    getAllSodas,
    createSoda,
    updateSodaPrice,
    updateSodaQuantity,
    buySoda } = require('../../controllers/sodas')




const route = Router()
const auth = require('../../utils/auth')

route.get('/getAll', async (req, res) => {
    try {

        const sodas = await getAllSodas();
        if (sodas.length != 0)
            res.status(200).send(sodas)
        else
            res.status(400).send({
                status: "No sodas found in machine"
            })

    }

    catch (err) {
        console.log(err)
        res.status(500).send({
            error: "could not get sodas"
        })
    }
})


route.get('/name/:name', async (req, res) => {

    try {
        let productName = req.params.name
        if (!productName)
            req.status(500).send("Need product name for search ")

        let soda = await getSodaByName(productName)

        if (!soda)
            res.status(400).send({
                error: 'No soda found with this name'
            })
        res.status(201).send(soda)
    }

    catch (err) {
        console.log(err)
        res.status(501).send({
            error: 'Could not retrieve soda server error'
        })
    }
})


route.post('/', auth, async (req, res) => {
    try {
        let productName = req.body.sodaName
        let description = req.body.description
        let price = req.body.cost
        let quantityAvailable = req.body.quantity
        if (!productName)
            res.status(500).send("Need Soda  sodaName")
        if (!description)
            res.status(500).send("Need Soda  description")
        if (!price)
            res.status(500).send("Need Soda Cost")
        if (!quantityAvailable)
            res.status(500).send("Need Soda quantity")

        let soda = await createSoda(productName, description, price, quantityAvailable)
        res.status(201).send(soda)
    }
    catch (err) {
        console.log(err)
        res.status(501).send({
            error: 'Could not create soda  server error'
        })
    }
})

route.put('/price/:sodaname', auth, async (req, res) => {
    try {
        let price = req.body.cost
        let name = req.params.sodaname
        if (!name)
            res.status(500).send("Need Soda  sodaName")
        let soda = await getSodaByName(name)

        if (!soda)
            res.status(401).send("Could not find any soda of this name")
        if (!price)
            res.status(500).send("Need Soda Cost")
        if (price <= 0)
            res.status(500).send("Need Valid Cost for update")
        await updateSodaPrice(name, price)


        res.status(201).send("Soda price is updated")
    }

    catch (err) {
        console.log(err)
        res.status(501).send({
            error: 'Could not update soda price server error'
        })
    }
})


route.put('/quantity/:sodaname', auth, async (req, res) => {

    try {
        let name = req.params.sodaname
        let quantity = req.body.quantity

        if (!quantity)
            res.status(500).send("Need Soda quantity for update")
        if (quantity <= 0)
            res.status(500).send("Need Valid quantity for update")
        let soda = await getSodaByName(name)

        if (!soda) {
            console.log(soda)
            res.status(404).send("Could not find any soda of this name")
        }
        await updateSodaQuantity(name, quantity)


        res.status(201).send("Soda quantity is updated")

    }

    catch (err) {
        console.log(err)
        res.status(501).send({
            error: 'Could not update soda quantity server error'
        })
    }

})

route.put('/buy/:sodaname', async (req, res) => {
    try {
        let name = req.params.sodaname
        let updatedSoda = await buySoda(name)
        if (!updatedSoda)
            res.status(401).send("Could not find any soda of this name")

        if (updatedSoda === 'Out of Stock')
            res.status(404).send("Sorry We are out of stock with this soda")


        res.json({
            ProductName: updatedSoda.productName,
            Description: updatedSoda.description,
            Cost: updatedSoda.cost
        })
    }

    catch (err) {
        console.log(err)
        res.status(501).send({
            error: 'Could not buy soda server error'
        })
    }


})

module.exports = {

    sodasRoute: route
}