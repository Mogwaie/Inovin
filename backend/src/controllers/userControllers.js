/* eslint-disable prettier/prettier */
const models = require("../models");

const getAllUsers = (req, res) => {
  models.user
    .findAll()
    .then(([user]) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserById = (req, res) => {
  models.user
    .find(req.params.id)
    .then(([user]) => {
      if (user[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(user[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const createUser = (req, res) => {
  const user = req.body;
  user.is_admin = 0;

  models.user
    .addUser(user)
    .then(([result]) => {
      res.location(`/users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const updateUser = (req, res) => {
  const user = req.body;

  user.user_id = parseInt(req.params.id, 10);

  models.user
    .updateUser(user)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.user
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  models.user
    .findUserByEmail(req.body)
    .then(([users]) => {
      if (users[0] != null) {
        [req.user] = users;
        next();
      } else {
        res.sendStatus(401);
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserInformation = (req, res) => {
  const userId = req.user_id;

  models.user
    .find(userId)
    .then(([user]) => {
      if (user) {
        const userInfo = {
          name: user[0].firstname,
          surname: user[0].lastname,
          email: user[0].email,
        };
        res.status(200).json(userInfo);
      } else {
        res.sendStatus(404);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  destroy,
  getUserByEmailWithPasswordAndPassToNext,
  getUserInformation,
};
