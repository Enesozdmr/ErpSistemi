const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    companyProfileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile' // CompanyProfile koleksiyonuna referans
    },
    operationID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Operations' // Operation koleksiyonuna referans
    },
    definition: String,
    queue: Number,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Route = mongoose.model('Route', routeSchema);

module.exports = Route;
