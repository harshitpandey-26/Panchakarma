import express from 'express';
import serverConfig from './config/index.js';
import apiRoutes from './routes/index.js';
import errorHandler from './middlewares/errorMiddleware.js';
// import connectCloudinary from './config/cloudinaryConfig.js';

const app = express();

// await connectCloudinary();

app.use(express.json());

app.use('/api',apiRoutes);

app.use(errorHandler);

app.listen(serverConfig.PORT,()=>{
    console.log(`Server is listening to port ${serverConfig.PORT}`);
})

