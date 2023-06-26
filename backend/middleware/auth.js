const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const hashOptions = {
  type: argon2.argon2d,
  memoryCost: 2 ** 16,
  hashLength: 50,
};

const hashPassword = async (req, res, next) => {
  const { password } = req.body;
  const hashedPassword = await argon2.hash(password, hashOptions);
  req.body.hashedPassword = hashedPassword;
  console.error(req.body.hashedPassword);
  delete req.body.password;
  next();
};

const verifyPassword = (req, res) => {
  argon2

    .verify(req.user.hashedPassword, req.body.password)

    .then((isVerified) => {
      if (isVerified) {
        const payload = { sub: req.user.id };

        const token = jwt.sign(payload, process.env.JWT_SECRET, {
          expiresIn: "1h",
        });

        delete req.user.hashedPassword;

        res.send({ token, user: req.user });
      } else {
        res.sendStatus(401);
      }
    })

    .catch((err) => {
      console.error(err);

      res.sendStatus(500);
    });
};

// ...

const verifyToken = (req, res, next) => {
  try {
    const authorizationHeader = req.get("Authorization");

    if (authorizationHeader == null) {
      throw new Error("Authorization header is missing");
    }

    const [type, token] = authorizationHeader.split(" ");

    if (type !== "Bearer") {
      throw new Error("Authorization header has not the 'Bearer' type");
    }

    req.payload = jwt.verify(token, process.env.JWT_SECRET);

    next();
  } catch (err) {
    console.error(err);

    res.sendStatus(401);
  }
};

module.exports = { hashPassword, verifyPassword, verifyToken };
