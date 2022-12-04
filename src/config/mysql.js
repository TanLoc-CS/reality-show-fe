import mysql from "mysql";

const db = mysql.createConnection({
	host: "localhost",
	user: "talu",
	password: "210205",
	database: "REALITYSHOW",
});

export default db;
