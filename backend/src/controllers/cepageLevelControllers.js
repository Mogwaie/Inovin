const models = require("../models");

const findAllCepages = (req, res) => {
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

const findCepageById = (req, res) => {
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

const editCepage = (req, res) => {
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
  findAllCepages,
  findCepageById,
  editCepage,
};
