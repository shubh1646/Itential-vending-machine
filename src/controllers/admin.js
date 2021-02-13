const { Admins } = require('../db/models')



async function createAdmin(email, password) {
    try {
        let user = await Admins.create({
            emailId: email,
            password: password
        })
        return user

    }


    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not create Admin  } "
    }

}



async function getAdmin(email) {
    try {
        let user = await Admins.findOne({
            where: {
                emailId: email
            }

        })
    }

    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not find Admin  } "
    }

}
async function deleteAdmin(email) {
    try {
        let user = await Admins.destroy({
            where: {
                emailId: email
            }

        })
    }

    catch (err) {
        console.log(err)
        return " { Error   :  DB error could not delete Admin  } "
    }
}


module.exports = {
    createAdmin,
    deleteAdmin,
    getAdmin
}