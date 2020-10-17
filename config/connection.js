const mysql = require("mysql");
let JAWSDB_URL = "mysql://gk623fghjioo42am:kql3goma3d2ws4xm@vrk7xcrab1wsx4r1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/gry7ad2kvdazal7k";

let connection;
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "burgers_db"
    });

};

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;