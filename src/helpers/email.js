import sgMail from "@sendgrid/mail";


export const callOrderEmail = async (newClient) => {
    await sgMail.send({
        to: process.env.TEST_EMAIL,
        from: process.env.SENDER_EMAIL,
        subject: 'Заявка на звонок с сайта',
        html: `<h2>Перезвоните мне!</h2>
            <p>${newClient.date}</p>
            <p>${newClient.name}</p>
            <p>${newClient.number}</p>
            <p>${newClient.email}</p>
            <p>${newClient.description}</p>
            `
    })
        .then(() => {
            console.log('Email sent to my email')
        })
        .catch((error) => {
            console.error(error)
        })
}
export const emailForClient = async (newClient) => {
    await sgMail.send({
        to: newClient.email,
        from: process.env.SENDER_EMAIL,
        subject: 'Ecolar',
        html: `<h2>Ваша заявка прийнята, незабаром Вам зателефонують!</h2>
        <p>Контакти які Ви залишили</p>
            <p>${newClient.date}</p>
            <p>${newClient.name}</p>
            <p>${newClient.number}</p>
            <p>${newClient.email}</p>
            <p>${newClient.description}</p>
            `
    })
        .then(() => {
            console.log('Email sent to ckient email')
        })
        .catch((error) => {
            console.error(error)
        })
}
