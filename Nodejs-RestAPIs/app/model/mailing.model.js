module.exports = (sequelize, Sequelize) => {
	const Mailing = sequelize.define('mailings', {
	  name: {
			type: Sequelize.STRING, defaultValue:  ""
	  },
	  date: {
		  type: Sequelize.DATE, defaultValue: null
	  },
		filename: {
			type: Sequelize.STRING, defaultValue:  ""
	  },
	  content: {
			type: Sequelize.TEXT('long')
	  },
	});

	return Mailing;
}
