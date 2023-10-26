const mongoose = require('mongoose');

const documentTypeSchema = new mongoose.Schema({
    name: String
});

const DocumentType = mongoose.model('DocumentType', documentTypeSchema);

module.exports = DocumentType;
