const express = require("express");
const path = require("path");
const app = express();

const routers = require("./routers");

app.set("view engine", "ejs");
// parse requests of content-type - application/json
app.use(express.json());

app.use(express.static(path.join(__dirname, "style")));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use(routers);

const db = require("./models");

db.sequelize
	.sync()
	.then(() => {
		console.log("Synced db.");
	})
	.catch((err) => {
		console.log("Failed to sync db: " + err.message);
	});

app.listen(4000);
