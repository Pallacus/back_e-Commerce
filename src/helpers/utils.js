const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const createToken = (user) => {
  //el token es un objeto de datos codificados
  const obj = {
    id: user.id,
    role: user.role,
  };

  return jwt.sign(obj, process.env.SECRET_KEY);
};

const sendMail = (to, subject, text) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "idfashioninfo71@gmail.com",
      pass: "bmgp ayga ulvn xjko",
    },
  });

  // Definimos el email
  let mailOptions = {
    from: "idfashioninfo71@gmail.com",
    to,
    subject,
    text,
  };
  // Enviamos el email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
    }
  });
};

module.exports = {
  createToken,
  sendMail,
};
