// Import the ORM to access functions that will interact with the database.
const orm = require("../config/orm");

const burgerModel = {
    all: cb => orm.all("burger", cb),
  
    
    create: (cols, vals, cb) => orm.create("burger", cols, vals, cb),
  
    update: (vals, where, cb) => orm.update("burger", vals, where, cb),
   
    delete: (condition, cb) => orm.delete("burger", condition, cb)
};

// Export the model
module.exports = burgerModel;
