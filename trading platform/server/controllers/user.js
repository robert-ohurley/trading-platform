import { db } from '../database.js' 

export const getUser = async (req, res) => {
    try {
        db.query('SELECT * FROM user', (err, result) => {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        })
    } catch (err) {
        res.status(500).send(err);
    } 
}

export const loginUser = async (req, res) => {
    try {
        const { username, password } = req.body;

        db.query(`SELECT * FROM user WHERE username = ${username}, password = ${password}`, (err, result) => {
            if (err) {
                // res.send(err);
            } else {
                // res.send(result);
            }
        })
    } catch (err) {
        res.status(500).send(err);
    } 
}

