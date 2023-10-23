const mongoose = require('mongoose');

const personelProfileSchema = new mongoose.Schema({
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role' // Roles koleksiyonuna referans
  },
  companyID: { Number, require: true },
  isCompanyAdmin: { Boolean, require: true },
  isUser: { Boolean, require: true },
  name: { String, require: true },
  surname: String,
  tcNo: Number,
  gender: {
    type: String,
    enum: ['Erkek', 'Kadın']
  },
  phone: String,
  email: {
    type: String,
    unique: true
  },
  sgkNo: String,
  sicilNo: String,
  birthDate: Date,
  hireDate: Date,
  jobTitle: String,
  görevi: String,
  education: {
    type: String,
    enum: ['İlkokul', 'Lise', 'Üniversite', 'Y.Lisans', 'Doktora']
  },
  mezunOlduguOkul: String,
  meslek: String,
  medeniDurum: String,
  cocukSayisi: Number,
  maas: Number,
  istenAyrildiMi: Boolean,
  yillikIzinHakki: Number,
  profilePhoto: String,
  password: String,
  adressCountryID: String,
  adressCityID: String,
  adressDistrictID: String,
  adress: String,
  note: String
});

const PersonelProfile = mongoose.model('PersonelProfile', personelProfileSchema);

module.exports = PersonelProfile;
