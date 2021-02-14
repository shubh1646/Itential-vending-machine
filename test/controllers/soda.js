const { expect } = require('chai')

const {
    getSodaByName,
    createSoda,
    updateSodaPrice,
    updateSodaQuantity,
    deleteSoda,
    buySoda
} = require('../../src/controllers/sodas')


describe('controller/sodas', () => {
    let createdSoda = null
    it('should create  a new soda', async () => {
        createdSoda = await createSoda('bunt', 'best cold drink', 2, 100)
      
        expect(createdSoda).to.have.property("cost")
        expect(createdSoda.cost).to.be.a("number")
        expect(createdSoda.quantityAvailable).to.be.a("number")
    })


    it('shoule return soda by name', async ()=>{
        let foundsoda = await getSodaByName(createdSoda.productName)
        expect(foundsoda.productName).to.equal(createdSoda .productName)
    })
    it('updates the soda price', async()=>{
        await  updateSodaPrice(createdSoda.productName,30)
        let getSoda = await getSodaByName(createdSoda.productName)
        expect(getSoda.cost).to.equal(30)
    })
    it('updates the soda quantity',async()=>{
        await updateSodaQuantity(createdSoda.productName,55)
        let getSoda = await getSodaByName(createdSoda.productName)
        expect(getSoda.quantityAvailable).to.equal(55)
    })

    it('buys a soda' , async()=>{
        await  buySoda(createdSoda.productName)
        let getSoda = await getSodaByName(createdSoda.productName)
        expect(getSoda.quantityAvailable).to.equal(54)
    })
    it('deletes the soda' , async()=>{
        await deleteSoda(createdSoda.productName)
        let getSoda = await getSodaByName(createdSoda.productName)
        expect(getSoda).to.equal(null)

    })

})