import { db } from '../database.js' 
import pkg from 'bcryptjs';
const { genSaltSync, hashSync, compareSync } = pkg; 



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
        
        db.query(`SELECT * FROM user WHERE username = ${username} LIMIT 1`, (err, result) => {
            if (err) {
                // res.send(err);
            } else {
                //pull password from database

                var salt = genSaltSync(10);
                var hash = hashSync(password, salt);
                console.log(hash)
                console.log(compareSync("admin", hash))
                console.log(compareSync("root", hash))
                //if hash matches return true
                //grab th
                // res.send(result);
            }
        })
    } catch (err) {
        res.status(500).send(err);
    } 
}

