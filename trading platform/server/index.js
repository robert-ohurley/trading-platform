import express from 'express';
import assetRoutes from './routes/asset.js'
import userRoutes from './routes/user.js'
import cors from 'cors'

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3001, () => {
    console.log("Listening on Port 3001")
})

app.use('/asset', assetRoutes)
app.use('/user', userRoutes)

