const multer = require("multer");
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads/';
    if (!fs.existsSync(dir)){
      fs.mkdirSync(dir);
    }

    cb(null, dir)
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage: storage})

module.exports = function(app) {
    const mailings = require('../controller/mailing.controller.js');

    // Retrieve all data
    app.get('/api/mailing', mailings.findAll);

    // Create a new data
    app.post('/api/mailing', upload.single("file"), mailings.create);

    // Retrieve a data by Id
    app.get('/api/mailing/:id', mailings.findById);

    // Retrieve a data by Id
    app.get('/api/mailing/download/:id', mailings.download);

    // test
    app.post('/api/test', mailings.test);
}
