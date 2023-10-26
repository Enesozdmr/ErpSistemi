const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
    name: String,
    mark: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Marks'
    }
});

const Model = mongoose.model('Model', modelSchema);

module.exports = Model;
