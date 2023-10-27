const mongoose = require('mongoose');

const billingAddressSchema = new mongoose.Schema({
    companyProfileID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CompanyProfile' // CompanyProfile koleksiyonuna referans
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
    addressCountry: String,
    addressState: String,
    addressCity: String,
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

const BillingAddress = mongoose.model('CompanyBillingAddress', billingAddressSchema);

module.exports = BillingAddress;
