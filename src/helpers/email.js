import sgMail from "@sendgrid/mail";


export const callOrderEmail = async (newClient) => {
    await sgMail.send({
        to: process.env.TEST_EMAIL,
        from: process.env.SENDER_EMAIL,
        subject: 'Заявка с сайта',
        html: `<h2>Передзвоніть мені!</h2>
            <p>Дата/час звернення: ${newClient.date}</p>
            <p>Ім'я: ${newClient.name}</p>
            <p>Номер телефону: ${newClient.number}</p>
            <p>Email: ${newClient.email}</p>
            <p>Тема звернення: ${newClient.description}</p>
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
        html: `<div>
    <h2>Добрий день, ${newClient.name}!</h2>
    <p style="margin-bottom: 40px">Ви залишили запит на зворотній з'язок на<a href = "https://ecoladevr.netlify.app/">ecolar.com.ua</a>,<br> незабаром з Вами зв'яжется наш представник і відповість на всі питання! </p>
    <p>Всього найкращого!</p>
</div >
    <div style="display: flex; align-items: center; margin-top:50px">
        <a href="https://ecoladevr.netlify.app/"
            style='display: block; width: 100px; margin-right:25px'
        >
            <span style="display: inline-block; background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAyMi4xLjAsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0i0KHQu9C+0LlfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiDQoJIHZpZXdCb3g9IjAgMCAxMDAwIDQyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTAwMCA0Mjg7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+DQoJLnN0MHtmaWxsOiMwMDM4N0I7fQ0KPC9zdHlsZT4NCjxnPg0KCTxwYXRoIGQ9Ik0xODguNSwxODUuN2g4Mi43YzAsMCwwLTAuMSwwLTAuMWMwLTQ1LjUtMzYuOS04Mi40LTgyLjQtODIuNHMtODIuNCwzNi45LTgyLjQsODIuNGMwLDQ1LjMsMzYuNyw4Mi4xLDgyLDgyLjNWMTg1Ljd6Ii8+DQoJPHBhdGggZD0iTTM2NC4xLDE4NS4xYzAtNDctMTguMy05MS4xLTUxLjUtMTI0LjNDMjc5LjQsMjcuNiwyMzUuNCw5LjQsMTg4LjUsOS4zdjE3LjljODcsMC4xLDE1Ny43LDcwLjksMTU3LjcsMTU3LjkNCgkJYzAsMC4yLDAsMC40LDAsMC42SDM2NEMzNjQsMTg1LjUsMzY0LjEsMTg1LjMsMzY0LjEsMTg1LjF6Ii8+DQoJPHBhdGggZD0iTTE4OC4zLDM0M2MtODcsMC0xNTcuOS03MC44LTE1Ny45LTE1Ny44SDEyLjVjMCw0Ni45LDE4LjMsOTEuMSw1MS41LDEyNC4yYzMzLjIsMzMuMiw3Ny4zLDUxLjUsMTI0LjMsNTEuNQ0KCQljMC4xLDAsMC4yLDAsMC4yLDBWMzQzQzE4OC40LDM0MywxODguMywzNDMsMTg4LjMsMzQzeiIvPg0KCTxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik0zODQuOSwxODUuN0gzNjRjLTAuMiw0Ni43LTE4LjQsOTAuNy01MS41LDEyMy43Yy0zMy4xLDMzLjEtNzcuMiw1MS40LTEyNC4xLDUxLjV2NTMuOGgxOTYuNFYxODUuN3oiLz4NCgk8cGF0aCBkPSJNMzAwLDE4NS43YzAsNjEuMy00OS45LDExMS4zLTExMS4zLDExMS4zYy02MS40LDAtMTExLjMtNDkuOS0xMTEuMy0xMTEuM2MwLTYxLjMsNDkuOC0xMTEuMiwxMTEuMS0xMTEuM1Y1Ni41DQoJCWMtMzQuNCwwLTY2LjgsMTMuNS05MS4yLDM3LjhjLTI0LjQsMjQuNC0zNy44LDU2LjgtMzcuOCw5MS40czEzLjQsNjcsMzcuOCw5MS40YzI0LjQsMjQuNCw1Ni44LDM3LjgsOTEuNCwzNy44czY3LTEzLjQsOTEuNC0zNy44DQoJCWMyNC40LTI0LjQsMzcuOC01Ni44LDM3LjgtOTEuM0gzMDB6Ii8+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zOTcuNSwzODVWMjE1aDcxLjN2MjEuOGgtNDAuM3Y0OC45aDMxLjd2MjEuNmgtMzEuN3Y1Ni4yaDQwLjdWMzg1SDM5Ny41eiIvPg0KCQk8cGF0aCBkPSJNNTI4LjcsMzg3LjNjLTEyLjUsMC0yMi4yLTIuNC0yOS4zLTcuM2MtNy4xLTQuOS0xMi0xMS42LTE0LjgtMjBjLTIuOC04LjUtNC4yLTE4LjItNC4yLTI5LjNWMjcwDQoJCQljMC0xMS42LDEuNC0yMS43LDQuMi0zMC4yYzIuOC04LjUsNy43LTE1LjEsMTQuOC0xOS43YzcuMS00LjYsMTYuOC02LjksMjkuMy02LjljMTEuNywwLDIwLjksMiwyNy42LDZjNi42LDQsMTEuNCw5LjcsMTQuMiwxNy4xDQoJCQljMi44LDcuNCw0LjIsMTYsNC4yLDI1Ljh2MTQuM2gtMjkuOHYtMTQuN2MwLTQuOC0wLjItOS4xLTAuNy0xM2MtMC41LTMuOS0xLjgtNy00LTkuM2MtMi4yLTIuMy01LjktMy41LTExLjItMy41DQoJCQljLTUuMywwLTkuMiwxLjItMTEuNiwzLjdjLTIuNCwyLjQtNCw1LjctNC43LDkuOWMtMC43LDQuMS0xLDguOC0xLDE0djczLjljMCw2LjIsMC41LDExLjIsMS41LDE1LjJjMSw0LDIuOCw3LDUuNCw5DQoJCQljMi42LDIsNi4xLDMsMTAuNiwzYzUuMiwwLDguOC0xLjIsMTEtMy43YzIuMi0yLjQsMy41LTUuNyw0LjEtOS44YzAuNi00LjEsMC44LTguNiwwLjgtMTMuNlYzMjJoMjkuOHYxMy42YzAsMTAuMS0xLjMsMTktNCwyNi44DQoJCQljLTIuNyw3LjgtNy4zLDEzLjgtMTQsMTguM0M1NTAsMzg1LjEsNTQwLjcsMzg3LjMsNTI4LjcsMzg3LjN6Ii8+DQoJCTxwYXRoIGQ9Ik02MzcuMSwzODcuM2MtMTIsMC0yMS42LTIuMi0yOC43LTYuN2MtNy4xLTQuNS0xMi4yLTEwLjktMTUuMy0xOS4zYy0zLjEtOC40LTQuNi0xOC4zLTQuNi0yOS44di02My42DQoJCQljMC0xMS41LDEuNS0yMS4zLDQuNi0yOS41YzMuMS04LjIsOC4yLTE0LjQsMTUuMy0xOC44YzcuMS00LjMsMTYuNy02LjUsMjguNy02LjVjMTIuMywwLDIyLDIuMiwyOS4xLDYuNQ0KCQkJYzcuMSw0LjMsMTIuMiwxMC42LDE1LjMsMTguOGMzLjEsOC4yLDQuNywxOCw0LjcsMjkuNXY2My44YzAsMTEuMy0xLjYsMjEuMi00LjcsMjkuNWMtMy4xLDguMy04LjMsMTQuOC0xNS4zLDE5LjMNCgkJCUM2NTkuMSwzODUsNjQ5LjQsMzg3LjMsNjM3LjEsMzg3LjN6IE02MzcuMSwzNjQuNGM1LjIsMCw5LTEuMSwxMS40LTMuNGMyLjQtMi4yLDQuMS01LjMsNC45LTkuMmMwLjgtMy45LDEuMy04LjIsMS4zLTEyLjh2LTc4LjMNCgkJCWMwLTQuOC0wLjQtOS0xLjMtMTIuOHMtMi41LTYuNy00LjktOC45Yy0yLjQtMi4yLTYuMy0zLjMtMTEuNC0zLjNjLTQuOSwwLTguNiwxLjEtMTEuMSwzLjNjLTIuNSwyLjItNC4yLDUuMS01LDguOQ0KCQkJYy0wLjgsMy44LTEuMyw4LTEuMywxMi44VjMzOWMwLDQuNiwwLjQsOC45LDEuMiwxMi44YzAuOCwzLjksMi40LDcsNC45LDkuMkM2MjguMywzNjMuMyw2MzIuMSwzNjQuNCw2MzcuMSwzNjQuNHoiLz4NCgkJPHBhdGggZD0iTTcwNC4xLDM4NVYyMTVoMzEuMXYxNDguNmg0MS4xVjM4NUg3MDQuMXoiLz4NCgkJPHBhdGggZD0iTTc3OC44LDM4NWwzNC0xNzBoMzMuMmwzNCwxNzBoLTI4LjdsLTYuNy0zOS4yaC0yOS42bC02LjksMzkuMkg3NzguOHogTTgxOCwzMjZoMjMuMWwtMTEuNS03MS4zTDgxOCwzMjZ6Ii8+DQoJCTxwYXRoIGQ9Ik04OTAuNiwzODVWMjE1aDQwLjdjMTEuNSwwLDIxLjIsMS40LDI5LjEsNC4xYzcuOSwyLjcsMTMuOSw3LjQsMTgsMTRjNC4xLDYuNiw2LjIsMTUuNSw2LjIsMjYuOWMwLDYuOS0wLjYsMTMtMS45LDE4LjUNCgkJCWMtMS4zLDUuNS0zLjQsMTAuMS02LjQsMTRjLTMsMy44LTcuMiw2LjgtMTIuNSw4LjlsMjMuNyw4My43aC0zMS4xbC0yMC42LTc3LjhoLTE0LjNWMzg1SDg5MC42eiBNOTIxLjYsMjg3LjZoOS43DQoJCQljNiwwLDEwLjgtMC45LDE0LjQtMi42YzMuNi0xLjcsNi4xLTQuNSw3LjctOC40YzEuNS0zLjgsMi4zLTguOCwyLjMtMTQuOGMwLTguNS0xLjYtMTQuOS00LjctMTkuMmMtMy4xLTQuMy05LjEtNi40LTE3LjktNi40DQoJCQloLTExLjNWMjg3LjZ6Ii8+DQoJPC9nPg0KPC9nPg0KPC9zdmc+DQo=');
            width:100px; background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;"></span>
        </a>
        <a href="tel:+380666013002" style='display: block; margin-right:25px'>+38 066 601 30 02</a>
        <a href="https://goo.gl/maps/9wy8s2nZnc1rWjf17" target='newBlank' >м. Київ, вул. Солом'янська, 1, офіс 201</a>
    </div>
            `
    })
        .then(() => {
            console.log('Email sent to ckient email')
        })
        .catch((error) => {
            console.error(error)
        })
}
