const router = require("express").Router();
const { listAll, listOne, addOne, deleteOne, editOne } = require("./usersController");
const {validatorCreateUser} = require("../validators/users")

//get all users
router.get("/", listAll);

//get user by id
router.get("/:id", listOne);

// post user
router.post("/", validatorCreateUser, addOne);

//patch user
router.patch("/:id", editOne)
// router.patch("/:id", editOne)

// delete user by id
router.delete("/:id", deleteOne);


// grabación 4 00:49:16
module.exports =  router 