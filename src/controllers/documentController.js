const Document = require("../models/documentModel");

//Llamar todos los usuarios
exports.getDocuments = async (req, res) => {
  try {
    const document = await Document.find();
    res.status(200).json({
      status: "ok",
      results: document.length,
      data: {
        document,
      },
    });
  } catch (error) {
    res.status(407).json({
      status: "fail",
      message: "Ha ocurrido un error llamando los documentosDocument",
      error: error,
    });
  }
};

//Llamar usuario por id
exports.getDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user: document,
    });
  } catch (error) {
    console.error(error);
    res.status(407).json({
      status: "fail",
      message: error,
    });
  }
};

//CREAR usuario
exports.createDocument = async (req, res) => {
  try {
    const newDocument = await Document.create(req.body);
    console.log(newDocument.name);
    res.status(201).json({
      status: "ok",
      newUser: newDocument,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//actualizar usuario por id
exports.updateDocument = async (req, res) => {
  try {
    const documentUpdated = await Document.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        //revisar
        runValidators: true,
      }
    );
    res.status(201).json({
      status: "success",
      document_updated: { documentUpdated },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//borrar usuario por id
exports.deleteDocument = async (req, res) => {
  try {
    const document = await Document.findById(req.params.id);
    const deletedDocument = await Document.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      document_deleted: { document },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
