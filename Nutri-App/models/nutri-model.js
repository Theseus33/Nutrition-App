//import database configuration
const db = require('../db/config');
//nutri as an empty object
const Nutri = {};
//returns all items from nutri column from database
Nutri.findAll = () => {
return db.query('SELECT * FROM nutri');
}
//finds nutri by specified ID from database
Nutri.findById = (id) => {
  return db.one(`
    SELECT * FROM nutri
    WHERE id = $1
    `, [id]);
}
//create new nutri by adding values to database table
Nutri.create = (nutri) => {
  return db.one(`
  INSERT INTO nutri
  (title, category, details)
  VALUES ($1, $2, $3)
  RETURNING *
  `, [nutri.title, nutri.category, nutri.details]);
}

//update existing nutri setting new values for parameters
Nutri.update = (nutri, id) => {
  return db.one(`
    UPDATE nutri SET
    title = $1,
    category = $2,
    details = $3
    WHERE id = $4
    RETURNING *
    `, [nutri.title, nutri.category, nutri.details, id]);
}
//delete a nutri by removing it from the database
Nutri.destroy = (id) => {
  return db.none(`
    DELETE FROM nutri
    WHERE id = $1
  `, [id]);
}

module.exports = Nutri;
