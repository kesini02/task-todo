const express = require("express");
const { getUsers, createUsers } = require("../controllers/userController");

const router = express.Router();
router.get("/", getUsers);
router.post("/seed", createUsers); // Create default users

module.exports = router;
