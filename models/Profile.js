const {Schema, model} = require('mongoose');

const schema = new Schema({
    fullName: {type: String, required: true} ,
    city: {type: String, required: true},
    age: {type: Number, required: true},
    working_leg: {type: String, required: true},
    soft_skills: {
        reliability: {type: Number, required: true},
        adequacy: {type: Number, required: true},
    },
    football_skills: {
        speed: {type: Number, required: true},
        spurt: {type: Number, required: true},
        stamina: {type: Number, required: true},
        strike_accuracy: {type: Number, required: true},
        impact_strength: {type: Number, required: true},
        pass: {type: Number, required: true},
        headbutt: {type: Number, required: true},
    },
    karma: {type: Number, required: true}
})

module.exports = model('Profile', schema);
