const {
  getAllUsers,
  getUserById,
  addNewUser,
  editUserById,
  deleteUserById,
} = require("./usersModel");
const notNumber = require("../utils/notNumber");

//get all users
const listAll = async (req, res, next) => {
  const dbResponse = await getAllUsers();
  if (dbResponse instanceof Error) return next(dbResponse)
  dbResponse.lenght ? res.status(200).json(dbResponse) : next()
};

//get user by id

const listOne = async (req, res, next) => {
  if (notNumber(req.params.id, next)) return
  const dbResponse = await getUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse)
  dbResponse.lenght ? res.status(200).json(dbResponse) : next()
};

//add new user
const addOne = async (req, res) => {
  console.log("tamo en el controlador", req.body)
  const dbResponse = await addNewUser(req.body)
  dbResponse instanceof Error ? res.status(500).json(dbResponse) : res.status(201).json(req.body)
}

//edit user by id
const editOne = async (req, res, next) => {
  if (notNumber(req.params.id, next)) return
  const dbResponse = await editUserById(+req.params.id, req.body)
  if (dbResponse instanceof Error) return next(dbResponse)
  dbResponse.affectedRows ? res.status(200).json(req.body) : next()
};

// delete user by id
const deleteOne = async (req, res, next) => {
  if (notNumber(req.params.id, next)) return
  const dbResponse = await deleteUserById(+req.params.id);
  if (dbResponse instanceof Error) return next(dbResponse)
  !dbResponse.lenght ? next() : res.status(204)
};

module.exports = { listAll, listOne, addOne, editOne, deleteOne };

//// grabación 4 finalizada. Comenzar a ver la 5ta.
