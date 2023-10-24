// İlgili modelleri ve diğer gerekli bağımlılıkları içe aktarın
const PersonelProfile = require('../models/PersonelProfiles');

// Tüm personel profillerini getiren bir kontrolör
const getAllPersonelProfiles = async (req, res) => {
    try {
        // Tüm personel profillerini veritabanından çekin
        const profiles = await PersonelProfile.find({});

        // Sonucu istemciye gönderin
        res.status(200).json(profiles);
    } catch (err) {

        res.status(500).json({ error: 'Veritabanından kayıtlar getirilirken hata oluştu.' });
    }
};



module.exports = {
    getAllPersonelProfiles,

};
