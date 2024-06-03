import mysql from "mysql";
// configuraçao do banco de dados mysql
export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "250988",
  database: "crud",
});
