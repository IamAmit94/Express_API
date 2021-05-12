// app.post('/users/add', )

// const { response } = require("express");
const {addNewUser,readNewUser,updateNewUser,deleteNewUser} = require("./service");

// Create User
module.exports.addUser = (req, res) => {
  addNewUser(req.body, (error, response) => {
    if (error)
      return res.status(400).send({ msg: "something went wrong", data: error });
    res.status(201).send({
      msg: "Data inserted successfully",
      userId: response.insertId,
    });
  });
};

// Read User

module.exports.readUser = (req, res) => {
  readNewUser((error, response) => {
    if (error)
      return res
        .status(400)
        .send({ msg: " Something went wrong", data: error });
    res.status(200).send({
      msg: " The requested Data",
      data: response,
    });
  });
};

// Update User

module.exports.updateUser = (req, res) => {
  updateNewUser(req.params, req.body, (error, response) => {

    if (error)
      return res
        .status(400)
        .send({ msg: "Something went wrong ", data: error });

    res.status(201).send({
      msg: " The user Data is successfully updated",
      data: response,
    });
  });
};

// Delete User

module.exports.deleteUser = (req, res) => {
  deleteNewUser(req.params, (error, response) => {
    if (error)
      return res
        .status(400)
        .send({ msg: "Something went wrong ", data: error });

    res.status(200).send({
      msg: "The user is deleted successfully",
      data: response,
    });
  });
};
