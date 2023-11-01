const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    customerGroupID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CustomerGroup'
    },
    type: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProfileType' // ProfileType koleksiyonuna referans
    },
    name: String,
    officialName: String,
    taxNumber: Number,
    taxOffice: String,
    addressCountry: String,
    addressCity: String,
    addressDistrict: String,
    address: String,
    contactName: String,
    contactPhone: String,
    contactEmail: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;
