const { getAllUsers, getUserById, addNewUser, editUserById, deleteUserById } = require("./usersModel");

//get all users
const listAll = async (req, res, next) => {
  const dbResponse = await getAllUsers(); 
  dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(200).json(dbResponse)
};

//get user by id

const listOne = async (req, res, next) => {
  if (isNaN(Number(req.params.id)) || req.params.id < 1) {
    res.status(400).json({ message: "ID debe ser un número entero positivo mayor que 0" });
  } else {
  const dbResponse = await getUserById(+req.params.id); 
  if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse)
  dbResponse.lenght ? res.status(200).json(dbResponse) : next()
  }
};

//add new user

const addOne = async (req, res) => {
  const user = {
    name: req.body.name,
    username: req.body.username,
    email: req.body.email
  }
const dbResponse = await addNewUser(user)
dbResponse.hasOwnProperty("error") ? res.status(500).json(dbResponse) : res.status(201).json(user)

};

//edit user by id
const editOne = async(req, res, next) => {
  if (isNaN(Number(req.params.id)) || req.params.id < 1) {
    return res.status(400).json({ message: "ID debe ser un número entero positivo mayor que 0" })
  }
  const dbResponse = await editUserById(+req.params.id, req.body)
  if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse)
  dbResponse.affectedRows ? res.status(200).json(req.body) : next()

}

// delete user by id
const deleteOne = async (req, res, next) => {
  if (isNaN(Number(req.params.id)) || req.params.id < 1) {
    return res
      .status(400)
      .json({ message: "ID debe ser un número entero positivo mayor que 0" });
  }
  const dbResponse = await deleteUserById(+req.params.id); 
  if (dbResponse.hasOwnProperty("error")) return res.status(500).json(dbResponse)
  !dbResponse.lenght ? next() : res.status(204).end(); 

};

module.exports = { listAll, listOne, addOne, editOne, deleteOne };
