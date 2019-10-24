const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

// TODO: Configure the `gmail.email` and `gmail.password` Google Cloud environment variables.
// firebase functions:config:set gmail.email="myusername@gmail.com" gmail.password="secretpassword"

const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport(
  smtpTransport({
    service: "gmail",
    auth: {
      user: gmailEmail,
      pass: gmailPassword
    }
  })
);

exports.sendMail = functions.https.onCall((data, context) => {
  return new Promise((resolve, reject) => {
    let itemsText = `
      Nombre: ${data.name},
      Teléfono: ${data.phone}
      Email: ${data.email},
      Mensaje: ${data.message}
      `;
    const mailOptions = {
      from: `Servidor de Jean Ayala <noreply@torinoautocasión.com>`,
      subject: `Mensaje de contacto`,
      to: ["ayalajeancarlos.91@gmail.com"]
    };
    mailOptions.text = itemsText;
    mailTransport
      .sendMail(mailOptions)
      .then(() => {
        return resolve("Se ha enviado un mensaje a travez de la plataforma");
      })
      .catch(() => {
        return reject(new functions.https.HttpsError("unknow"));
      });
  });
});
