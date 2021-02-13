const { Router } = require('express')

const { createAdmin,
    deleteAdmin,
    getAdmin } = require('../../controllers/admin')

const bcrypt = require('bcrypt');
const saltRounds = 10;
const route = Router()

route.post('/', async (req, res) => {
    try {
        let email = req.body.email
        if (!email)
            return res.status(400).send('Please enter email Id')
        if (!password)
            return res.status(400).send('Please enter password')
        let salt = await bcrypt.genSalt(saltRounds)
        let hashPassword = await bcrypt.hash(req.body.password, salt)
        await createAdmin(email, hashPassword)
        res.status(201).send("admin created")
    }
    catch (err) {
        console.log(err)
        res.status(500).send("Server error Admin unable to create")
    }
})


route.post('/login', async (req, res) => {
    try {
        let email = req.body.email
        let password = req.body.password
        if (!email)
            return res.status(400).send('Please enter email Id')
        if (!password)
            return res.status(400).send('Please enter password')

        let user = await getAdmin(email)
        if (!user)
            return res.status(400).send('Admim email not found')

        let validPass = await bcrypt.compare(password, user.password)
        if (!validPass)
            return res.status(400).send('Password is not correct')


            var privateKey = config.token

            var token = jwt.sign({ user: userId }, privateKey)
            res.header('auth-token', token)
            res.status(200).send('User Logged in ! ' + token)
    }

    catch (err) {
        console.log(err)
        res.status(500).send("Server error Admin unable to login")
    }
})


route.delete('/:email', async (req, res) => {
    try {
        let email = req.params.email
        await deleteAdmin(email)
        res.status(200).send("Admin deleted")
    }


    catch (err) {
        console.log(err)
        res.status(500).send("Server error Admin unable to deleted")
    }


})



module.exports = {
    adminRoute: route
}