const userController = require('../controllers/user_controller');
const express = require('express');
const router = express.Router();

//http://localhost:3000/api/v1/user/new-user
router.post("/new-user", userController.createUser);
router.get("/", userController.listUser);
router.get("/:id", userController.getUser);
router.get("/edit/:id", userController.editUser);

module.exports = router;