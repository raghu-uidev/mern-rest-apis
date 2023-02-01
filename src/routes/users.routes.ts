import express, { Request, Response } from "express";
import usersController from "../controllers/users.controller";
import authService from "../middleware/auth";

const userRoutes = express.Router();

userRoutes.post('/register', usersController.userRegistrationController);

userRoutes.post('/login', usersController.userLoginController);

userRoutes.put('/update/:userId', authService.verifyToken, usersController.userUpdateController); 

export default userRoutes;