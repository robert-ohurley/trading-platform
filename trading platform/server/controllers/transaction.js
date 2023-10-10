import { db } from '../database.js' 

export const getTransactions = async (req, res) => {
    try {
        db.query('SELECT * FROM transaction', (err, result) => {
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

export const addTransaction = async (req, res) => {
    const { userId, transactionHash } = req.body;
    console.log(userId, transactionHash);
    try {
        db.query(`INSERT INTO transaction (user_id, transaction_hash) values (${userId}, '${transactionHash}');`, (err, result) => {
            if (err) {
                res.send(err);
            } else {
                console.log(res)
                res.send(result);
            }
        })
    } catch (err) {
        console.log(err())
        res.status(500).send(err)
    } 
}