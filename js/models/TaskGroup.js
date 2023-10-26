const mongoose = require('mongoose');

const taskGroupSchema = new mongoose.Schema({
    name: String
});

const TaskGroup = mongoose.model('TaskGroup', taskGroupSchema);

module.exports = TaskGroup;
