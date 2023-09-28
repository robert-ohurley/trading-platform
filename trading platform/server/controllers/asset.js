import { db } from '../database.js' 

export const getAssets = async (req, res) => {
    db.query('SELECT * FROM asset', (err, result) => {
        if (err) {
            res.send(err);
        } else {
            console.log("working api");
            console.log(result);
            res.send(result);
        }
    })
}


