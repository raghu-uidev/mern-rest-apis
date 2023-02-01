import express from "express";
import cartController from "../controllers/cart.controller";
import authService from "../middleware/auth";

const cartRoutes = express.Router();

cartRoutes.post('/addProductToCart/:cartId', authService.verifyToken, cartController.addProductToCartController);

cartRoutes.get('/getProductsFromCart/:cartId', authService.verifyToken, cartController.getProductsFromCartController);

cartRoutes.delete('/deleteProductFromCart/cart/:cartId/product/:productId', authService.verifyToken, cartController.deleteProductsFromCartController);

export default cartRoutes;