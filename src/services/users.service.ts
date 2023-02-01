import { compare, hash } from "bcrypt";
import userModel from "../models/users.model"
import { v4 as uuidv4 } from 'uuid';
import * as jwt from 'jsonwebtoken';
import APP_CONFIGS from "../config/configs";

const userRegistrationService = async (userData: any) => {
    return new Promise(async (resolve, reject) => {
        /*
             {
                "username": "test",
                "email": "test123@webla.com",
                "password": "test123"
             }
        */
        const actulPassword = userData.password;
        userData.password = await hash(actulPassword, 10);
        userData.cartId = uuidv4();
        /*
             {
                "username": "test",
                "email": "test123@webla.com",
                "password": "$2b$10$ZSUiIQpGjdE7Qnto0scucOu.XJvjwV.4BN6W03EOwnLeJOtCfSwii",
                "cartId": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d"
             }
        */
        const newUser = new userModel(userData);
        try {
            const result = newUser.save();
            resolve(result);
        } catch(error) {
            reject(error); 
        }
    });
}

const userLoginService = async (userLoginData: any) => {
    /** {
     *      "email": "test123@webla.com",
            "password": "test123",
     *  }
     */
    return new Promise(async (resolve, reject) => {
       let users: any = await userModel.find({email: userLoginData.email});
       /**
        *    [
                    {
                        _id: new ObjectId("63cfd31ace39d8015746b548"),
                        username: 'raghu',
                        email: 'test@webla.com',
                        password: '$2b$10$DzfJZjsrNuRGqRof4mTwauCUVSJmn.Cxv/f8.mD4IzDuDUSTlGC2u',
                        cartId: 'c5b1aa04-676e-40de-bc60-3f3fe572afbf',
                        __v: 0
                    }
            ]
        */ 
       if(users.length > 0) {
        // test123 === $2b$10$DzfJZjsrNuRGqRof4mTwauCUVSJmn.Cxv/f8.mD4IzDuDUSTlGC2u
         const isPasswordMatched: boolean =  await compare(userLoginData.password, users[0].password);
         if(isPasswordMatched) {
          const token =  jwt.sign({userId: users[0]._id}, APP_CONFIGS.tokenAuthKey, {expiresIn: '2h'});
          const userData = {
             userId: users[0]._id,
             cartId: users[0].cartId,
             token: token
          }  
          resolve(userData);
         } else {
          reject({message: 'Password didnt matched with our record'});
         }
       } else {
         reject({message: 'No user existed with this email'});
       }
    });
}

const userUpdateService =  async (userId: string, userUpdateData: any) => {
   return new Promise (async (resolve, reject) => {
    try {
        if(userUpdateData.password) {
            const actulPassword = userUpdateData.password;
            userUpdateData.password = await hash(actulPassword, 10);
        }
        const result = await userModel.updateOne({_id: userId}, userUpdateData);
        resolve({message: 'User details updated successfully'});
    } catch(error) {
        reject({message: 'Unable to update user details'});
    }
   });
}

const userService = {
    userRegistrationService: userRegistrationService,
    userLoginService: userLoginService,
    userUpdateService: userUpdateService
}

export default userService;