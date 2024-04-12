const dotenv = require("dotenv");

dotenv.config();
interface MailjetResponse {
  body: {
    Messages: Array<{
      Status: string;
      To: Array<{
        Email: string;
        MessageUUID: string;
        MessageID: number;
        MessageHref: string;
      }>;
    }>;
  };
}
type HttpError = {
  statusCode: number;
  message: string;
  body?: string;
};
exports.test = (req: any, res: any) => {
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
  const mailjetClient = require("node-mailjet").connect(
    "170130eec861efb351dc8530476e8685",
    "5acadb7534515298117d7ecf48b0cbdc"
  );
  mailjetClient
    .post("send", { version: "v3.1" })
    .request(emailData)
    .then((result: MailjetResponse) => {
      console.log(result.body);
    })
    .catch((err: HttpError) => {
      console.error(err.statusCode);
      res.status(500).send("Failed to send email");
    });
};
