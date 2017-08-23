// models/characters.js
const mongoose = require('mongoose');

const characterSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    house: { type: String },
    animagus: {type: String}
    // organization: [{
    //     dumbledoresArmy: { type: Boolean },
    //     orderOfPhoenix: { type: Boolean },
    //     deathEater: { type: Boolean }
    // }],

})

const CharacterTemplate = mongoose.model('CharacterTemplate', characterSchema);

module.exports = CharacterTemplate;
