// Import connection.
const cnn = require("./connection");

function addMarks(num) {
  return new Array(num).fill('?').toString()
}
// check for properties declared 
function isDirectProperty(key) {
  return Object.prototype.hasOwnProperty.call(this, key);
}
// if value is a string with spaces, add quotations 
function quoteSpaces(value) {
  return (
    typeof value === "string" && value.indexOf(' ') >= 0 ?
    `'${value}'`:
    value
  );
}
// Helper function to convert object key/value pairs to SQL syntax
function objToSql(obj) {
    const arr = [];
    // loop through the keys and push the key/value as a string into arr
    for (let prop in obj) {
        if (isDirectProperty.call(obj, prop)) {
            arr.push(`${prop}=${quoteSpaces(obj[prop])}`);
        }
    }
    // convert array of strings to a single comma-separated string
    return arr.toString();
}

// Export the orm object
module.exports = {
    all: (tName, cb) => {
        console.log(tName);
        cnn.query(`SELECT * FROM ${tName};`, cb);
    },
  
    create: (table, cols, vals, cb) => {
        const sql = `INSERT INTO ${table} (${cols.toString()}) 
                     VALUES (${addMarks(vals.length)});`;
        console.log(sql);
        cnn.query(sql, vals, cb);
    },
    
    // An example of objColVals would be {name: panther, sleepy: true}
    update: (table, objColVals, condition, cb) => {
        const sql = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(sql);
        cnn.query(sql, cb);
    },
      
    delete: (table, condition, cb) => {
        const sql = `DELETE FROM ${table} WHERE ${condition};`
        cnn.query(sql, cb);
    }
};
