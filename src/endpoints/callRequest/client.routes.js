import express from "express";
import Joi from "joi";
import { addOrder } from "./client.controller.js";
import validate from "../../helpers/validate.js";
import { asyncWrapper } from "../../helpers/asyncWrapper.js";

const Router = express.Router

const addClientSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    number: Joi.string().required(),
    description: Joi.string().required(),
    date: Joi.string().required(),
});


const router = Router();

router.post(
    "/",
    validate(addClientSchema),
    asyncWrapper(addOrder)
);

export default router;