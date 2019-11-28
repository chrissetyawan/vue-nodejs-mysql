const db = require('../config/db.config.js');
const Mailing = db.mailings;
const fs = require('fs');
const path = require('path');
const q = require('../module/Queue.js');

// Create new data
exports.create = async (req, res) => {
  const { file } = req;
  const { name = "", date = null } = req.body;

  q.push({ name,  date,  file }, function (err, result) {
    if (err) res.status(500).send("Error -> " + err);
    res.status(200).send("Mailing succefully saved");
  });
};

// FETCH all data
exports.findAll = (req, res) => {
	Mailing.findAll().then(result => {
		res.send(result);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Find a data by Id
exports.findById = (req, res) => {
	Mailing.findByPk(req.params.id).then(result => {
		res.send(result.dataValues);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// download file by Id
exports.download = (req, res) => {
	Mailing.findByPk(req.params.id).then(result => {
    const fileLocation = path.join('./uploads', result.dataValues.filename)

    res.download(fileLocation, result.dataValues.filename, function (err) {
      if (err) {
        // Handle error, but keep in mind the response may be partially-sent
        // so check res.headersSent
        res.status(500).send("Error -> " + err);
      } else {
        // decrement a download credit, etc.
      }
    })
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

exports.test = async (req, res) => {
  q.push({ x: 1 });
};
