const Pool = require('pg').Pool;

const pool = new Pool({
    user: "admindanielluna",
    password: "univalle.edu.co",
    database: "crudpostgresqlreactnode",
    host: "crudpostgresqlreactnodeinstance.c2xtnseqmrkx.us-east-2.rds.amazonaws.com",
    port: 5432
});

module.exports = pool;