const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded())



const { sodasRoute } = require('./routes/sodas')
const { adminRoute } = require('./routes/admins')

app.use('/api/sodas', sodasRoute)
app.use('/api/admin', adminRoute)

app.listen(process.env.PORT || 4000, () => {
    console.log("application is running on htttp://localhost:4000")
})