import { db } from '../database.js' 

export const getAssets = async (req, res) => {
    try {
        db.query('SELECT * FROM asset', (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    } catch (err) {
        res.status(500).send(err)
    } 
}


