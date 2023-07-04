const { Sequelize, DataTypes } = require("sequelize");
const sequelize = require("../config");

const Info = sequelize.define("Info", {
	title: { type: DataTypes.STRING },
	content: { type: DataTypes.STRING },
});

module.exports = Info;
