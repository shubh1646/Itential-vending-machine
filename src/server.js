const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded())



const { sodasRoute } = require('./routes/sodas')
const { adminRoute } = require('./routes/admins')
const { machineRoute } = require('./routes/machine')

app.use('/api/sodas', sodasRoute)
app.use('/api/admin', adminRoute)
app.use('/api/machine', machineRoute)
app.use('/', express.static(__dirname + '/public'))
app.listen(process.env.PORT || 4000, () => {
    console.log("application is running on htttp://localhost:4000")
})
