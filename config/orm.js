//methods/helper functions here to execute mysql commands in controllers
//these methods will retrieve and store data in the database
//select, insert, update
//export orm object in module.exports

//require connection file
const cnn = require("./connection");

//creates array of ? to pass values into
function addMarks(num){
    return new array(num).fill('?').toString()
}

funtion isDirectProperty(key) {
    return Object.prototype.hasOwnProperty.call(this, key);
}

function quoteSpaces(value){
    return(
        typeof value === "string" && value.indexOf(' ') >= 0?
        `'${value}'`: value
    );
}

//convert to sql syntax
function objToSql(obj){
    const arr = [];
    for (let prop in obj){
        if (isDirectProperty.call(obj, prop)){
            arr.push(`${prop}=${quoteSpaces(obj [prop])}`);
        }
    }
    //coma separation
    return arr.toString();
}

//export orm
module.exports = {
    all: (tName, cb) => {
        cnn.query(`SELECT * FROM ${tName};`, cb);
    },
    create: (table, cols, vals, cb) => {
        const sql = `INSERT INTO ${table} (${cols.toString()})
                    VALUES (${addMarks(vals.length)});`;
        console.log(sql);
        cnn.query(sql, vals, cb);            
    },
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
