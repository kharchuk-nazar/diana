const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    user_name: {type: String, required: true},
    user_id: {type: Number}
})

module.exports = model('User', schema);