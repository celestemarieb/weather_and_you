import createApp from './app.js'
import { MongoClient, Db } from 'mongodb'
import dotenv from 'dotenv'
dotenv.config()

const port = 5000
let app = createApp(null)
let db = Db;

const mongoURI = process.env.MONGO_DB_CLUSTER_NAME
const client = new MongoClient(mongoURI);

(async () => {

    try {
        await client.connect()
        db = client.db('weather_and_you')

        const app = createApp(db)

        app.listen(port, () => {
            console.log('App listening on port ${port}')
        })
    }  catch (err) {
        console.error('Error connecting to MongoDB: ',err)
        process.exit(1)
    }
})();

app.get('/', (req, res) => {
    res.send('Hello World!')
  })

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})