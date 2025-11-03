const mongoose = require("mongoose");

const cooperativoSchema = new mongoose.Schema({
  evento: { 
    type: String, 
    required: true 
  },
  invitar: { 
    type: String, 
    required: true, 
  }
});

module.exports = mongoose.model("Cooperativo", cooperativoSchema);
