import cartModel from "../models/cart.model";

const addProductsToCartService = async (cartId: string, product: any) => {
    return new Promise(async(resolve, reject) => {
       try {
            const result: any = await cartModel.find({cartId: cartId});
            if(result.length > 0) {
                const isProductExist = result[0].products.find((prd: any) => prd._id === product._id);
                if(isProductExist) {
                    const updatedQuantity = isProductExist.userQuantity + product.userQuantity;
                    product.userQuantity = updatedQuantity;
                    await cartModel.updateOne({cartId: cartId}, {$pull: {products: {_id: product._id}}});
                    await cartModel.updateOne({cartId: cartId}, {$push: {products: product}});
                }
            } else {
               const newCartData = new cartModel();
               newCartData.cartId = cartId;
               newCartData.products.push(product);
               await newCartData.save();
            }
            resolve({message: 'Products added to cart.'});
       } catch(error) {
            console.log(error);
            reject({message: 'Unable to add products to cart'});
       }
    });
}

const getProductsFromCartService = async(cartId: string) => {
  return new Promise(async(resolve, reject) => {
    try{
       console.log(cartId);
       const results = await cartModel.find({cartId: cartId});
       console.log(results);
       if(results.length > 0) {
         resolve(results);
       } else {
         resolve({message: 'No products added to this cart'});
       }
    } catch(error){
        reject({message: 'Unable to fetch the cart data'});
    }
  });
}

const deleteProductsFromCartService = async(cartId: string, productId: string) => {
    return new Promise(async(resolve, reject) => {
      try{
        await cartModel.updateOne({cartId: cartId}, {$pull: {products: {_id: productId}}});
        resolve({message: 'Product removed from cart successfully'});
      } catch(error){
        reject({message: 'Unable to remove product from cart'});
      }
    });
}
  
const cartService = {
    addProductsToCartService : addProductsToCartService,
    getProductsFromCartService : getProductsFromCartService,
    deleteProductsFromCartService : deleteProductsFromCartService
}

export default cartService;