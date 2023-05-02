const mongoose = require('mongoose');


const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A task must have a name'],
        trim: true,
    }, completed: {
        type: Boolean,
        default: false,
    }
})

const Task = mongoose.model('Task', TaskSchema);

module.exports = {Task}