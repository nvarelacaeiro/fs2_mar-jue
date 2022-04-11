const router = require("express").Router();
const { listAll, listOne, register, deleteOne, editOne, login } = require("./usersController");
const {validatorCreateUser} = require("../validators/users")
const uploadFile = require("../utils/handleStorage")

//get all users
router.get("/", listAll);

//get user by id
router.get("/:id", listOne);

// registrar new user
router.post("/register", uploadFile.single("file"), register);

//login
router.post("/login", login)

//patch user
router.patch("/:id", editOne)
// router.patch("/:id", editOne)

// delete user by id
router.delete("/:id", deleteOne);


// grabación 4 00:49:16
module.exports =  router 