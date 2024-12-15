import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

const createApp = () => {
    const app = express();

    app.use(helmet());
    app.use(cors({ origin: "*"}));
    app.use(express.json())

    return app;
}

export default createApp;