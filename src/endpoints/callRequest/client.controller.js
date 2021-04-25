import { callOrderEmail, emailForClient } from "../../helpers/email.js";
import clientModel from "./client.model.js";

export const addOrder = async (req, res) => {
    const { name, email, number, description, date } = req.body;
    const newClient = await clientModel.create({
        name,
        email,
        number,
        description,
        date
    });
    // await (user).save();
    await callOrderEmail(newClient)
    await emailForClient(newClient)
    res.status(201).send({ message: 'Email sent' });
};


