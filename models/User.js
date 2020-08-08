const {Schema, model} = require('mongoose');

const schema = new Schema({
    fullName: {type: String, required: true} ,
    email: {type: String, required: true, unique: true}, //unique - значение уникальное, не должно повторятся
    password: {type: String, required: true}
})

module.exports = model('User', schema);
