const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PersonelProfile = require('./models/PersonelProfiles');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Merhaba, dünya!');
});

const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

// MongoDB'ye bağlan
mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

// Bağlantı başarılı mı kontrol et
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Bağlantı hatası:'));
db.once('open', () => {
    console.log('MongoDB\'ye başarıyla bağlandınız!');
});

app.use(bodyParser.json());



// app.post('/create-profile', (req, res) => {
//     const newProfile = new PersonelProfile({
//         roleId: 1234,
//         companyId: 1234,
//         isCompanyAdmin: true,
//         isUser: true,
//         name: "Enes",
//         surname: "Özdemir",
//         tcNo: 10954273078,
//         gender: "erkek", // Sadece "kadın" veya "erkek" olabilir
//         phone: 325245346,
//         email: "enesozdmr@outlook.com",
//         sgkNo: "1243423",
//         sicilNo: "342432",
//         // birthDate: req.body.birthDate,
//         // hireDate: req.body.hireDate,
//         // jobTitle: req.body.jobTitle,
//         // education: req.body.education,
//     });

//     newProfile.save()
//         .then(() => {
//             console.log('Profil kaydedildi.');
//             res.status(201).json({ message: 'Profil kaydedildi' });
//         })
//         .catch((err) => {
//             console.error('Profil kaydedilirken hata oluştu:', err);
//             res.status(500).json({ error: 'Profil kaydedilemedi' });
//         });
// });

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
});
