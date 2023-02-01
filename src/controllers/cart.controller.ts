import { Request, Response } from "express";
import cartService from "../services/cart.service";

const addProductToCartController = async (req:Request, res: Response) => {
    cartService.addProductsToCartService(req.params.cartId, req.body).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const getProductsFromCartController = async (req:Request, res: Response) => {
    const cartId: string = req.params.cartId ? req.params.cartId.toString() : '';
    cartService.getProductsFromCartService(cartId).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const deleteProductsFromCartController = async (req:Request, res: Response) => {
    const cartId: string = req.params.cartId ? req.params.cartId.toString() : '';
    const productId: string = req.params.productId ? req.params.productId.toString() : '';
    cartService.deleteProductsFromCartService(cartId, productId).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}


const cartController = {
    addProductToCartController : addProductToCartController,
    getProductsFromCartController : getProductsFromCartController,
    deleteProductsFromCartController : deleteProductsFromCartController
}

export default cartController;