var config = {
    database : { 
        
        dialect : process.env.MYSQL_DIALECT || 'mysql',
        database : process.env.MYSQL_DATABASE || 'vendingdb',
        username :process.env.MYSQL_USER || 'vendinguser',
        password : process.env.MYSQL_PASSWORD || 'vendingpass',
       host: process.env.HOST||  'mysql'
    },
  
    token : "aVK1UYus0=4[D^y>Ek>BH~epz#z%7e28CWY(f#5cnXo(RLQ"
}

module.exports = config;