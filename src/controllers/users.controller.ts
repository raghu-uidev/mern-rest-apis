import { Request, Response } from "express";
import userService from "../services/users.service";

const userRegistrationController = async (req: Request, res: Response) => {
    userService.userRegistrationService(req.body).then((result) => {
        res.status(200).send({message: 'User created successfully'});
    }).catch((error) => {
        console.log(error);
        if(error.keyPattern && error.keyPattern.email) {
            res.status(500).send({message: 'User exist with this email'});
        } else {
            res.status(500).send({message: 'Unable to create user'});
        }
    });   
}

const userLoginController = async (req: Request, res: Response) => {
    userService.userLoginService(req.body).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });   
}

const userUpdateController = async (req: Request, res: Response) => {
    userService.userUpdateService(req.params.userId, req.body).then((result) => {
        res.status(200).send(result);
    }).catch((error) => {
        res.status(500).send(error);
    });
}

const usersController = {
    userRegistrationController: userRegistrationController,
    userLoginController: userLoginController,
    userUpdateController: userUpdateController
}

export default usersController;