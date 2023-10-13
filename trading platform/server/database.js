import { createConnection } from "mysql";

export const db = createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'nft'
});



