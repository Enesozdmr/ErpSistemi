const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    }
});

const Unit = mongoose.model('Unit', unitSchema);

module.exports = Unit;
