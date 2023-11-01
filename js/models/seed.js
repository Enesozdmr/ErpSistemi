const mongoose = require('mongoose');
const Route = require('./Routes'); // Modül yolu sadece "Routes"
const CompanyProfile = require('./CompanyProfile');
const Operation = require('./Operations');  // Modül yolunu doğru belirttiğinizden emin olun


// MongoDB bağlantı dizesi
const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

(async () => {
    try {
        // Önceden kaydedilmiş bir companyProfile dokümanının _id'sini almak için sorgu yapın
        const companyProfile = await CompanyProfile.findOne({}).exec();
        if (!companyProfile) {
            console.error('companyProfile bulunamadı.');
            return;
        }
        const companyProfileID = companyProfile._id;

        // Önceden kaydedilmiş bir operation dokümanının _id'sini almak için sorgu yapın
        const operation = await Operation.findOne({}).exec();
        if (!operation) {
            console.error('Operation bulunamadı.');
            return;
        }
        const operationID = operation._id;

        // Rota oluştur
        const route = new Route({
            companyProfileID: companyProfileID,
            operationID: operationID,
            definition: 'Route 1 Definition',
            queue: 1
        });

        await route.save();

        console.log('Route MongoDB\'ye başarıyla eklendi.');
    } catch (error) {
        console.error('Route ekleme hatası:', error);
    } finally {
        // MongoDB bağlantısını kapat
        mongoose.connection.close();
    }
})();
