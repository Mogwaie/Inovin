const mailer = require("./mailer");

const sendEmail = (req, res, next) => {
  const emailOptions = {
    from: "olesia.tur@gmail.com",
    to: "olesia.tur@wildcodeschool.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  };

  mailer.sendMail(emailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.info(info);
    }
    next();
  });
};

module.exports = { sendEmail };
