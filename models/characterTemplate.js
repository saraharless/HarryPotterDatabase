// models/characters.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    house: { type: String, required: true },
    animagus: {type: Boolean}
    organizations: [{
        dumbledoresArmy: { type: Boolean },
        orderOfPhoenix: { type: Boolean },
        deathEater: { type: Boolean }
    }],

})

const Characters = characterTemplate.model('Characters', characterSchema);

module.exports = characterTemplate;
