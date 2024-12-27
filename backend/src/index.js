import createApp from './app.js'
import { Db, ObjectId } from 'mongodb'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const port = 8080
let app = createApp(null)
let db = Db;

const mongoURI = process.env.MONGO_DB_CLUSTER_NAME
 
async function dbConnect() {
    try {
        await mongoose.connect(mongoURI)
        const app = createApp(db)
        console.log("Database connected")

    }  catch (error) {
        console.error('Error connecting to MongoDB: ')
        process.exit(1)
    }
}

dbConnect();

//async function dbClose(){
    //await mongoose.connection.close();
    //console.log("Database disconnected")
//}

app.get("/databaseHealth", (request, response) => {
    let databaseState = mongoose.connection.readyState;
    let databaseName = mongoose.connection.name;
    let databaseModels = mongoose.connection.modelNames();
    let databaseHost = mongoose.connection.host;

    response.json({
        readyState: databaseState,
        dbName: databaseName,
        dbModels: databaseModels,
        dbHost: databaseHost
    })
});

import SuggestionRouter from './routes/suggestions.js';

app.use('/suggestions', SuggestionRouter);


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
}) 
