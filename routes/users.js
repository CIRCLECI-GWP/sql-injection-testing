const express = require("express");
const router = express.Router();

const user = require("../user");

router.get("/fetch", user.getUsers);
router.post("/fetch", user.getUser);

router.post("/create", user.createUser)

module.exports = router;