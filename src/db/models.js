const Sequelize = require('sequelize');
const config = require('../config.js')
const db = new Sequelize(config.database)


const Sodas = db.define('soda', {

    productName: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    description: {
        type: Sequelize.DataTypes.TEXT('tiny'),
        allowNull: false
    },
    cost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantityAvailable: {
        type: Sequelize.INTEGER,
        allowNull: false
    }


})


const Admins = db.define('admin', {
    emailId: {
        type: Sequelize.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    password: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})



const Transactions = db.define('transactions', {
    productName: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    },
    transactionCost: {
        type: Sequelize.DataTypes.STRING,
        allowNull: false
    }
})


Sodas.hasMany(Transactions, {
    foreignKey: 'productName'
});




//{force:true}

db.sync()
    .then(() => {
        console.log("DB is synced")
    })
    .catch((err) => {
        console.log(err)
        console.log("error creating database")
    });


db.authenticate()


module.exports = {
    Admins,
    Sodas,
    Transactions
}