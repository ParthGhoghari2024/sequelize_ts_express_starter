import { Request, Response } from "express";
// import { userModel, UserAttributes } from "../models/userModel";

import db from "../models";

const getAllUserController = async (req: Request, res: Response) => {
  try {
    const users = await db.UserModel.findAll();

    res.json({ success: 1, result: users });
  } catch (error) {
    console.log(error);
  }
};

const createUserController = async (req: Request, res: Response) => {
  try {
    // const newUser: UserAttributes = {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
    };

    await db.UserModel.create(newUser);

    return res.json({ success: 1 });
  } catch (error) {
    console.log(error);
  }
};

const deleteUserController = async (req: Request, res: Response) => {
  try {
    const userId: number = req.body.userId;
    const deleteUserResult = await db.UserModel.destroy({
      where: {
        id: userId,
      },
    });

    // console.log(deleteUserResult);

    res.json({ success: 1 });
  } catch (error) {
    console.log(error);
  }
};
export { getAllUserController, createUserController, deleteUserController };
