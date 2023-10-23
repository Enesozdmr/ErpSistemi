const mongoose = require('mongoose');

const companyProfileSchema = new mongoose.Schema({
    adminUserID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'PersonelProfile' // 'PersonelProfile' adlı koleksiyona referans
    },
    name: String,
    officialName: String,
    taxNumber: Number,
    taxOffice: String,
    adressCountryID: String,
    adressCityID: String,
    adressDistrictID: String,
    adress: String,
    logo: String // Logo'nun URL'si gibi bir şeyi saklamak için bir string kullanabilirsiniz.
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);

module.exports = CompanyProfile;
