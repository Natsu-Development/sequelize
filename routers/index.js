const router = require("express").Router();
const Tutorial = require("../controllers/tutController");

router.get("/", Tutorial.findAll);

router.post("/add", Tutorial.create);

module.exports = router;
