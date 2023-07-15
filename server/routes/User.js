const express = require("express");
const getUsers = require("../controller/User");

const router = express.Router();

router.get("/users", getUsers);

module.exports = router;
