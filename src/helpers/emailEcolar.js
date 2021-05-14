import nodemailer from "nodemailer";
import dotenv from "dotenv"
import path from "path"
import { getPaths } from "./utils.js"
import fs from "fs"
// import logo from "../image/ecolar_logo_full_transparent.png"

const { __dirname } = getPaths(import.meta.url)
dotenv.config(path.join(__dirname, ".env"))

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_NAME,
        pass: process.env.EMAIL_PASSWORD
    }
})

export async function mailEcolar(newClient) {
    await transporter.sendMail({
        to: process.env.EMAIL_NAME,
        from: process.env.EMAIL_NAME,
        subject: "Заявка с сайта",
        html: `<h2>Передзвоніть мені!</h2>
            <p>Дата/час звернення: ${newClient.date}</p>
            <p>Ім'я: ${newClient.name}</p>
            <p>Номер телефону: ${newClient.number}</p>
            <p>Email: ${newClient.email}</p>
            <p>Тема звернення: ${newClient.description}</p>
            `
    })
}
export async function mailEcolarClient(newClient) {
    await transporter.sendMail({
        to: newClient.email,
        from: process.env.EMAIL_NAME,
        subject: "Ecolar.com.ua",
        html: `<div>
    <h2>Добрий день, ${newClient.name}!</h2>
    <p style="margin-bottom: 40px">Ви залишили запит на зворотній з'язок на <a href = "https://ecoladevr.netlify.app/">ecolar.com.ua</a>,<br> незабаром з Вами зв'яжется наш представник і відповість на всі питання! </p>
    <p>Всього найкращого!</p>
</div >
    <div style="display: flex; align-items: baseline; margin-top:50px">
        <a href="https://ecoladevr.netlify.app/"
            style='display: block; width: 100px; margin-right:25px'
        >
            <img src="cid:logoEcolar.png"
            width="100px" height="50px" alt="logo"/>
        </a>
        <a href="tel:+380666013002" style='display: block; margin-right:25px'>+38 066 601 30 02</a>
        <a href="https://goo.gl/maps/9wy8s2nZnc1rWjf17" target='newBlank' >м. Київ, вул. Солом'янська, 1, офіс 201</a>
    </div>
            `,
        attachments: [{
            filename: 'ecolar_logo_full_transparent.png',
            // encoding: "binary",
            path: "./public/image/ecolar_logo_full_transparent.png",
            cid: 'logoEcolar.png' //same cid value as in the html img src
        }]
    })
}