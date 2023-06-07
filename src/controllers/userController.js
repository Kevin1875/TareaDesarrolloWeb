const User = require("../models/userModel");

exports.getUsers = async (req, res) => {
  console.log("holaaa");
  const users = await User.find();
  res.status(200).json({
    status: "ok",
    results: users.length,
    data: {
      users,
    },
  });
};

exports.crearUser = async (req, res) => {
  try {
    const newusers = await User.create(req.body);
    console.log(newusers.name);
    res.status(201).json({
      status: "ok",
      newUser: newusers,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


//CODIGO GUÍA PARA KEVINHO


/*
exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    status: "melo",
    results: users.length,
    data: {
      users,
    },
  });
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      status: "success",
      user: user,
    });
  } catch (error) {
    console.error(error);
    res.status(407).json({
      status: "fail",
      message: error,
    });
  }
};

exports.createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json({
      status: "success",
      new_user: { newUser },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const userUpdated = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(201).json({
      status: "success",
      user_updated: { userUpdated },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    const users = await User.find();
    res.status(201).json({
      status: "success",
      user_deleted: { user },
      users: {
        users,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};


*/
