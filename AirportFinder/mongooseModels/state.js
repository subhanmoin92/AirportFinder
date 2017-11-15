const mongoose = require('mongoose');


//state Schema
const stateSchema = mongoose.Schema({
  loc: {
    type: {
      type: String
    },
    coordinates: {
      type: Array
    }
  },
  name: {
    type: String
  },
  code:{
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const State = module.exports = mongoose.model('State', stateSchema);

//get airports
module.exports.getStates = function(callback, limit){
  State.find(callback);
}
