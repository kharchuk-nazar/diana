const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    number: {type: String, required: true},
    name: {type: String, required: true},
    sex: {type: String, required: true},
    birth_date: {type: String, required: true},
    parents: [{type: String}],
    phone: {type: String, required: true},
    address: {type: String, required: true},
    teacher_id: {type: Number, required: true}
})

module.exports = model('Statement', schema);