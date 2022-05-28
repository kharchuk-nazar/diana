const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    classroom: {type: Number, required: true},
    teacher_id: {type: Number, required: true},
    teacher_name: {type: String, required: true},
    students: [{
        name: String,
        stud_id: Number,
        marks: [{
            sub_id: Number,
            mark: String
        }],
    }],
    subjects: [{
        name: String,
        sub_id: Number
    }],
    class_id: {type: Number, required: true},
    
})

module.exports = model('Progress', schema);