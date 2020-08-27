
const {Pool, Client} = require('pg')
const connectionString = "postgres://gfnfqpkxaodiqa:0654c082efc88aa509a330e4856159f03ec7a9ef0c3eb3a6b47912390cc3d808@ec2-54-247-103-43.eu-west-1.compute.amazonaws.com:5432/d5n7ttp6t8i446";

const pool = new Pool({
    connectionString: connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = pool;
