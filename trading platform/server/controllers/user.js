import { db } from '../database.js' 

export const getUser = async (req, res) => {
    db.query('SELECT * FROM user', (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log("working api");
            console.log(result);
            res.send(result);
        }
    })
}

