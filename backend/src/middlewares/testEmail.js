const mailer = require("./mailer");

mailer.sendMail(
  {
    from: "olesia.tur@gmail.com",
    to: "olesia.tur@wildcodeschool.com",
    subject: "This is a test email",
    text: "Hello world",
    html: "<p>Hello <em>world</em></p>",
  },
  (err, info) => {
    if (err) console.error(err);
    else console.info(info);
  }
);
