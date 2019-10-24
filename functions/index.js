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
    validate(data)
      .then(() => {
        let attendees = data.attendees
          .map(attendee => {
            return `
            - ${attendee}`;
          })
          .join(" ");
        let itemsText = `
        Nombre: ${data.name},
        Teléfono: ${data.phone}
        Email: ${data.email},
        Mensaje: ${data.message ? data.message : "No ha dejado mensaje"}
        Asistentes: ${attendees}
        `;
        const mailOptions = {
          from: `Servidor de Jean Ayala <noreply@torinoautocasión.com>`,
          subject: `Mensaje de contacto`,
          to: [
            "ayalajeancarlos.91@gmail.com",
            "rlopez@cocosolution.com",
            "soporte@cocosolution.com"
          ]
        };
        mailOptions.text = itemsText;
        return mailTransport.sendMail(mailOptions);
      })
      .then(() => {
        return resolve("Se ha enviado un mensaje a travez de la plataforma");
      })
      .catch(err => {
        return reject(new functions.https.HttpsError(err));
      });
  });
});

function validate(data) {
  return new Promise((resolve, reject) => {
    let name = data.name;
    let namePttr = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    let phone = data.phone;
    let phonePttr = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;
    let emailPttr = /.+@.+\..+/;
    let email = data.email;
    let message = data.message;
    let errors = [];
    if (!name) {
      errors.push("Por favor rellene el campo Nombre.");
    } else if (name.length > 40) {
      errors.push("El campo Nombre no debe superar los 40 caracteres");
    } else if (!namePttr.test(name)) {
      errors.push("El campo Nombre debe ser un nombre válido");
    }
    if (!phone) {
      errors.push("Por favor rellene el campo Teléfono.");
    } else if (!phonePttr.test(phone)) {
      errors.push("El campo Teléfono debe ser numero válido.");
    }
    if (!email) {
      errors.push("Por favor rellene el campo E-mail.");
    } else if (!emailPttr.test(email)) {
      errors.push("El campo E-mail debe ser un correo válido.");
    }
    if (message.length > 500) {
      errors.push("El campo Mensaje no debe superar los 500 caracteres");
    }
    for (let index = 0; index < data.attendees.length; index++) {
      if (!data.attendees[index]) {
        this.errors.push(`Escriba el nombre del ${index + 1}º asistente.`);
      } else if (data.attendees[index].length > 40) {
        this.errors.push(
          `El nombre del asistente ${index +
            1} no debe superar los 40 caracteres`
        );
      } else if (!namePttr.test(data.attendees[index])) {
        this.errors.push(
          `El nombre del asistente ${index + 1} debe ser un nombre válido`
        );
      }
    }
    if (errors.length === 0) {
      resolve(true);
    } else {
      let err = errors;
      reject(err);
    }
  });
}
