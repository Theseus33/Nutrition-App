//on event console log subject of the query
const options = {
  query: (e) => {
    console.log(e.query);
  }
};
//imports instance of pg-promise with options
const pgp = require('pg-promise')(options);
//setting up database with proper name and returns a pg-promise instance
function setDatabase() {
  if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
    return pgp({
      database: 'todo_list_dev',
      port: 5432,
      host: 'localhost',
    });
  }else if (process.env.NODE_ENV === 'production'){
    return pgp(process.env.DATABASE_URL);
  };
};

const db = setDatabase();
//exports database for use
module.exports = db;

