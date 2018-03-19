//import orm.js into this file
//call the orm functions
//export at the end of the file

const orm = require("../config/orm");

const burgerModel = {
    all: cb => orm.all("burgers", cb),
  
    // The variables "cols" and "vals" are arrays.
    create: (cols, vals, cb) => orm.create("burgers", cols, vals, cb),
  
    update: (vals, where, cb) => orm.update("burgers", vals, where, cb),
   
    delete: (condition, cb) => orm.delete("burgers", condition, cb)
};

// Export the model
module.exports = burgerModel;