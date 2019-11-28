const db = require('../config/db.config.js');
const Mailing = db.mailings;

const Queue = require('better-queue');
const q = new Queue(async function (input, cb) {

  try {
    const csv = require('csvtojson')
    const array = await csv().fromFile(input.file.path)
    const dataString = await JSON.stringify(array)

  	Mailing.create({
  		name : input.name,
  		date : input.date,
      filename : input.file.filename,
      content : dataString
  	}).then(mailing => {
      result = { success : true, message : "success" }
      cb(null, mailing);
  	}).catch(err => {
      result = { success : false, message : err }
      cb(err, null);
  	})
  }
  catch(err) {
    cb(err, null);
  }
}, {
  concurrent: 10
})

module.exports = q;
