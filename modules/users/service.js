const connection = require("../../database/db");

module.exports.addNewUser = (payload, callback) => {
  try {
    let sql = "INSERT INTO basicinfo (firstName, lastName, age) VALUES (?,?,?)";
    values = [payload.firstName, payload.lastName, payload.age];

    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (e) {
    return callback(e, null);
  }
};

// Read User
module.exports.readNewUser = (callback) => {
  try {
    let sql = "SELECT * FROM basicinfo ";
    connection.query(sql, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

// Update user
module.exports.updateNewUser = (payload, body, callback) => {
  try {
    let sql ="UPDATE basicinfo SET firstName =?, lastName=?, age=? WHERE id =?";
    values = [body.firstName, body.lastName, body.age, payload.id];
    console.log(values);

    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};

//Delete user

module.exports.deleteNewUser = (payload, callback) => {
  try {
    let sql = "DELETE FROM basicinfo WHERE id = ?;";
    values = [payload.id];

    connection.query(sql, values, function (err, data) {
      if (err) return callback(err, null);
      callback(null, data);
    });
  } catch (error) {
    return callback(error, null);
  }
};
