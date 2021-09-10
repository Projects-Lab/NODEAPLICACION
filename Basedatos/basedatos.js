const mysql = require("mysql");
const connection = mysql.createConnection({
    host: 'bdy4d7tmbdmomjqp1das-mysql.services.clever-cloud.com',
    user: 'u6hdnxi4scgbnxhh',
    password: '280AfUgOMdf12qDHs953',
    database: 'bdy4d7tmbdmomjqp1das'
    
});

connection.connect((error)=>{
    if(error){
        console.log('Errore in coneczione: ' + error);
        return;
    }
    console.log("Coneczione Correcta");

});

module.exports = connection; //para no tener que setear nuevamente, utilixzar mas adelante
