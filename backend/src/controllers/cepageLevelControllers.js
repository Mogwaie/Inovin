const models = require("../models");

const findAllCepagesLevel = (req, res) => {
  models.cepage_level
    .findAll()
    .then(([rows]) => {
      res.send(rows);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const findCepageLevelById = (req, res) => {
  models.cepage_level
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const editCepageLevel = (req, res) => {
  const cepageLevel = req.body;
  cepageLevel.cepage_level = parseInt(req.params.id, 10);
  models.cepage_level
    .update(cepageLevel)
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

module.exports = {
  findAllCepagesLevel,
  findCepageLevelById,
  editCepageLevel,
};
