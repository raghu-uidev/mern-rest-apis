import { Request, Response } from "express";
import productsServie from "../services/products.service";

const addProductController = async (req: Request, res: Response) => {
    const productDetails = req.body;
    productsServie.addProductService(productDetails).then((result) => {
      res.status(200).send(result);
    }).catch((error) => {
      res.status(500).send(error); 
    });
}

const updateProductController = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  const productDetails = req.body;
  productsServie.updateProductService(productId, productDetails).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(500).send(error); 
  })
}

const deleteProductController = async (req: Request, res: Response) => {
  const productId = req.params.productId;
  productsServie.deleteProductService(productId).then((result) => {
    res.status(200).send(result);
  }).catch((error) => {
    res.status(500).send(error); 
  })
}

const getProductsController = async (req: Request, res: Response) => {
  let filter: any = {};
  if(req.query) {
    filter = req.query.search;
  }
  console.log(filter);
  productsServie.getProductsService(filter).then((results) => {
     res.status(200).send(results);
  }).catch((error) => {
    res.status(500).send(error); 
  })
}

const productsController = {
    addProductController : addProductController,
    updateProductController: updateProductController,
    getProductsController: getProductsController,
    deleteProductController: deleteProductController
}

export default productsController;