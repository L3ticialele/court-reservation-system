const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'sistema_quadras',
    password: '2509',
    port: 5432,
})

module.exports = pool