const express = require('express');

//const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express()
const port =  process.env.DB_PORT || 5000;
//process.env.PORT ||

app.use(express.urlencoded({extended: true})); // New

app.use(express.json()); // New




var conn = mysql.createConnection({
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER ||'root',
    password: process.env.DB_USER_PSWD ||'',
    database: process.env.DB || 'vetware_test'
  });
  
  conn.connect(function(err) { 
    if (err) throw err; 
    conn.query('SELECT * from animals',
    function (err, result) { 
      if (err) throw err; 
      console.log(result);
       }); 
  });

  app.listen(port, () => console.log(`Listening on port ${port}`));
  module.exports = conn;
