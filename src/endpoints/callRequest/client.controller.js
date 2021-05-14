import { callOrderEmail, emailForClient } from "../../helpers/email.js";
import { mailEcolar, mailEcolarClient } from "../../helpers/emailEcolar.js"
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
    await mailEcolar(newClient)
    await mailEcolarClient(newClient)
    res.status(200).send({ message: 'Email sent' });
};


