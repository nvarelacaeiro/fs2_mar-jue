const router = require("express").Router();
const { listAll, listOne, addOne, editOne, deleteOne } = require("./usersController");

//get all users
router.get("/", listAll);

//get user by id
router.get("/:id", listOne);

// post user
router.post("/", addOne);

//patch user
router.patch("/:id", editOne)
// router.patch("/:id", editOne)

// delete user by id
router.delete("/:id", deleteOne);


// grabación 4 00:49:16
module.exports =  router 