import productsModel from "../models/products.model";

const addProductService = async (productsData: any) => {
    return new Promise(async(resolve, reject) => {
        try {
            // const newProduct = new productsModel(productsData);
            // newProduct.save();  
            await productsModel.insertMany(productsData);
            resolve({message: 'Added product successfully'});
        } catch(error) {
            reject({message: 'Unable to add product'}); 
        }
    });
}

const updateProductService = async (productId: string, productDetails: any) => {
    return new Promise(async(resolve, reject) => {
        try {
            await productsModel.updateOne({_id: productId}, productDetails);
            resolve({message: 'Product details updated successfully'});
        } catch(error) {
            reject({message: 'Unable to update product details'});
        }
    });
}

const deleteProductService = async (productId: string) => {
    return new Promise(async(resolve, reject) => {
        try {
            await productsModel.deleteOne({_id: productId});
            resolve({message: 'Product details deleted successfully'});
        } catch(error) {
            reject({message: 'Unable to delete product details'});
        }
    });
}

const getProductsService = async (filter?: any) => {
    return new Promise(async(resolve, reject) => {
     try {
       const products = await productsModel.find(JSON.parse(filter));
       resolve(products);
     } catch(error) {
      console.log(error);
       reject({message: 'Unable to retreive products'}); 
     }
    });
}

const productsServie = {
    addProductService : addProductService,
    updateProductService: updateProductService,
    getProductsService: getProductsService,
    deleteProductService: deleteProductService
}

export default productsServie;