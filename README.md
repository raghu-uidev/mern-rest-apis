# mern-rest-apis
ecommerce apis with mern stack

## Dependencies ##
1. @types/node
2. ts-node
3. nodemon
4. express and @types/express
5. monogoose
6. typescript


## Project Overview ##

Ecommerce Project

 1. Login / Signup
 2. Dashboard (Products List)
 3. Cart

 1. User Module
    
    This module deals with regitration and login flows

     a. Registration API -- POST API as we are sending some data to create in Database
     b. Login API -- POST API as we will send some sensitive data for verification
     c. Update API -- PUT API as we are updating some user data in database.

2. Products Module

   Thi module deals with maintiaing the products list

      a. show list of products  --  GET API to retreive or find list products
      b. add a product  -- POST API to add / create a product in our database
      c. update a product  --  PUT API to update the product details
      d. delete a product  --  DELETE API to delete a product

3. Carts Module

   This module deals with user cart detials.   

   1. Get prodcuts added by user in the cart -- GET API to fetch products added by user in the cart
   2. Add/Update product in cart -- PUT API to add product in a cart
   3. Remove product from cart -- Delete API to remove product from the cart






   POST MAN API hit ===>  Will check if URL exist in routes =====> will assign a controller for each API route =====> Controller will receive data  =====> will perfrom some bussiness logics in Servies =====> Controller will recieve the result from Service ====> Based on result controller will give the respective result.


   Step1 == End user will hit an API with some URL
   Step2 == Will check of URL is configured in the web server
   Step3 == If matched , req, response callback will be triggred, else 404 error will be sent by webserver


1 routes === > api urls configurations

2 controller == >  request, response 

3 services == >  all database tranactions and business logics

4 models === >  all schemas requiered for app.


Registration API:

1. Configure /registration POST API URL in users routes section.
2. Create user registration controller and assign that to registration route.
3. Receive data using Request object and send data using Response object in controller
4. Create an async promise in user service which handle saving the user data.
5. Based on service result, send response to user from controller.

Login API:

1. Configure /login POST API URL in users routes section.
2. Create user login controller and assign that to login route.
3. Receive data using Request object and send data using Response object in controller
4. Create an async promise in user service which handle saving the user data.
5. Based on service result, send response to user from controller.

Update User API:

1. Configure /update PUT API URL in users routes section.
2. Create user update controller and assign that to login route.



Update Product API:
1. Configure /update PUT API URL in products routes section.



1. save   === >   POST
2. update === >   PUT 
3. delete ====>   DELETE
4. find   ====>   GET


:  ====> req.params.xyz
?  ====> req.query.xyz



cartId === > list of products added.

cartID - 1,  products with ids 2(1),3(2) added

next day cartID 1, product with id 2(2) added
