const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "atelierinovin@gmail.com",
    to: "olesia.tur@gmail.com",
    subject: "Bonjour Olesia",
    text: "I send you an email",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.info(info);
  }
);
