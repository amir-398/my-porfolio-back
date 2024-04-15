"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
exports.test = (req, res) => {
    const { name, email, message } = req.body;
    const emailData = {
        Messages: [
            {
                From: {
                    Email: "amir.meb398@gmail.com",
                    Name: "Contact",
                },
                To: [
                    {
                        Email: "amir.meb398@gmail.com",
                        Name: "Contact",
                    },
                ],
                Subject: "Nouveau message de contact",
                TextPart: "Vous avez reçu un nouveau message de contact",
                HTMLPart: `
          <h3>Informations de contact</h3>
          <ul>
            <li>Nom: ${name}</li>
            <li>Email: ${email}</li>
          </ul>
          <h3>Message : </h3>
          <p>${message}</p>
          `,
            },
        ],
    };
    const mailjetClient = require("node-mailjet").connect("170130eec861efb351dc8530476e8685", "5acadb7534515298117d7ecf48b0cbdc");
    mailjetClient
        .post("send", { version: "v3.1" })
        .request(emailData)
        .then((result) => {
        console.log(result.body);
    })
        .catch((err) => {
        console.error(err.statusCode);
        res.status(500).send("Failed to send email");
    });
};
