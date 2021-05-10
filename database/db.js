const mySql = require('mysql')


const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'userinfo'
})

connection.connect(function(err){
    if(err) throw err
    console.log(' Database connected Successfully !')
})

module.exports = connection;