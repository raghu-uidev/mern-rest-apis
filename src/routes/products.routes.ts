import express from "express";
import productsController from "../controllers/products.controller";
import authService from "../middleware/auth";

const productsRoutes = express.Router();

productsRoutes.post('/addProduct', authService.verifyToken, productsController.addProductController);

productsRoutes.put('/updateProduct/:productId', authService.verifyToken, productsController.updateProductController);

productsRoutes.get('/getProducts',  authService.verifyToken, productsController.getProductsController);

productsRoutes.delete('/deleteProduct/:productId',  authService.verifyToken, productsController.deleteProductController);

export default productsRoutes;