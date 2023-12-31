const mongoose = require('mongoose');

const profileTypeSchema = new mongoose.Schema({
    name: {
        type: String,
    }
});

const ProfileType = mongoose.model('ProfileType', profileTypeSchema);

module.exports = ProfileType;
