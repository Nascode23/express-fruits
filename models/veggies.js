//connect to Mongodb
const mongoose = require('mongoose');
//create array of vegetables
const veggies = [
    {
      name: "spinach",
      color: "green",
      readyToEat: true,
    },
    {
      name: "onion",
      color: "yellow",
      readyToEat: true,
    },
    {
      name: "eggplant",
      color: "purple",
      readyToEat: false,
    }
  ];
// veggie schema for mongoDB
const veggieSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  color:  { type: String, required: true },
  readyToEat: Boolean
});
const Veggie = mongoose.model('veggie', veggieSchema);
// Export Veggies array and veggie schema
module.exports = Veggie;


