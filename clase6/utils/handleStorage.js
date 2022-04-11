const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, res, callback) => {
    const pathStorage = `${__dirname}/../storage`;
    callback(null, pathStorage);
  },
  filename: (req, file, callback) => {
    const ext = file.originalname.split(".").pop();
    const filename = `file_${Date.now()}.${ext}`;
    callback(null, filename);
  },
});

//creamos un middleware
const uploadFile = multer({ storage })
module.exports = uploadFile 


//me aparece un not found (404) a la hora de cargar el archivo tmb