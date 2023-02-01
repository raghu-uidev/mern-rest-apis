/**
 *  This file is to create and start the web server and to configure the API routes
 */

import express, { Request, Response } from "express";
import './config/db';
import userRoutes from "./routes/users.routes";
import productsRoutes from "./routes/products.routes";
import cartRoutes from "./routes/cart.routes";

const app = express();
const PORT = 4000;
const API_VERSION = '/api/v1';
app.use(express.json());
app.use(API_VERSION + '/users', userRoutes);
app.use(API_VERSION + '/products', productsRoutes);
app.use(API_VERSION + '/cart', cartRoutes);

app.listen(PORT, () => {
    console.log('Web server started at htpps://localhost:4000');
});


