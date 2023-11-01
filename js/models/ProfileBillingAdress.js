const mongoose = require('mongoose');

const profileBillingAdressSchema = new mongoose.Schema({
    profileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Profile'
    },
    profileTypeID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProfileType'
    },
    billingType: {
        type: String,
        enum: ["Individual", "Institutional"]
    },
    addressName: String,
    name: String,
    surname: String,
    idNumber: String,
    companyName: String,
    taxNumber: String,
    taxOffice: String,
    phone: String,
    email: String,
    addressCountryID: String,
    addressStateID: String,
    addressCityID: String,
    address: String,
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const ProfileBillingAdress = mongoose.model('ProfileBillingAdress', profileBillingAdressSchema);

module.exports = ProfileBillingAdress;
