import express from 'express';
import assetRoutes from './routes/asset.js'
import userRoutes from './routes/user.js'
import cors from 'cors'
import { genSalt, hash } from 'bcrypt';
const app = express();

const saltRounds = 10;
const myPlaintextPassword = 'admin';

console.log(genSalt(saltRounds, function(err, salt) {
    hash(myPlaintextPassword, salt, function(err, hash) {
        console.log(hash) 
    });
})
)

app.use(cors());
app.use(express.json());
app.listen(3001, () => {
    console.log("Listening on Port 3001")
})

app.use('/asset', assetRoutes)
app.use('/user', userRoutes)
//connection.end();
