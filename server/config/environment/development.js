'use strict';

// Development specific configuration
// ==================================
module.exports = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://localhost:27017,localhost:27018,localhost:27019/petshelter-dev',
    options: {
     replSet: {

      rs_name : 'rs0',
      slaveOk : true,
      readPreference : 'secondaryPreferred',
      auto_reconnect: true
     }
    }
  },

  seedDB: true
};
