// models/characters.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String },
    house: { type: String },
    animagus: {type: String}
    // organization: [{
    //     dumbledoresArmy: { type: Boolean },
    //     orderOfPhoenix: { type: Boolean },
    //     deathEater: { type: Boolean }
    // }],

})

const alohomara = mongoose.model('characterTemplate', characterSchema);

module.exports = alohomara;
