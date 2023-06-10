const Authority = require("../models/authorityModel");

//Llamar todos los autoridad
exports.getAuthorities = async (req, res) => {
  try {
    const authority = await Authority.find();
    res.status(200).json({
      status: "ok",
      results: authority.length,
      data: {
        authority,
      },
    });
  } catch (error) {
    res.status(407).json({
      status: "fail",
      message: "Ha ocurrido un error llamando la autoridad",
      error: error,
    });
  }
};

//Llamar autoridad por id
exports.getAuthority = async (req, res) => {
  try {
    const authority = await Authority.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user: authority,
    });
  } catch (error) {
    console.error(error);
    res.status(407).json({
      status: "fail",
      message: error.message,
    });
  }
};

//CREAR autoridad
exports.createAuthority = async (req, res) => {
  try {
    // Convertir las cadenas de fecha a objetos Date
    const updated_date = new Date();
    const creation_date = new Date();
    console.log(updated_date);
    // Crear el nuevo documento con las fechas convertidas
    const newAuthority = await Authority.create({
      name: req.body.name,
      admins: req.body.admins,
      updated_date: updated_date,
      creation_date: creation_date
    });

    res.status(201).json({
      status: "ok",
      new_Authority: newAuthority,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//actualizar autoridad por id
exports.updateAuthority = async (req, res) => {
  try {
    const authorityUpdated = await Authority.findByIdAndUpdate(
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
      authority_updated: { authorityUpdated },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

//borrar autoridad por id
exports.deleteAuthority = async (req, res) => {
  try {
    const authority = await Authority.findById(req.params.id);
    const deletedAuthority = await Authority.findByIdAndDelete(req.params.id);
    res.status(201).json({
      status: "success",
      authority_deleted: { authority },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};
