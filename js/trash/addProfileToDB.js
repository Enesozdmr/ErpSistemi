const mongoose = require('mongoose');
const PersonelProfile = require('../models/PersonelProfiles');
const Role = require('../models/Roles');

const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';


mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


async function addProfileToDB() {
    try {

        const role = await Role.findOne({ name: "Admin" }).exec();

        if (!role) {
            console.error('Rol bulunamadı.');
            mongoose.connection.close();
            return;
        }


        const newProfile = new PersonelProfile({
            roleId: role,
            name: 'Adı',
            surname: 'Soyadı',
            tcNo: '12345678901',
            gender: 'Erkek',
            phone: '555-555-5555',
            email: 'ornek@ornek.com',
            sgkNo: 'SGK123456',
            sicilNo: 'SICIL123',
            birthDate: new Date('1990-01-01'),
            hireDate: new Date('2023-01-01'),
            jobTitle: 'Üretim Sorumlusu',
            education: 'Üniversite',

        });

        await newProfile.save();
        console.log('Profil başarıyla eklendi.');
    } catch (err) {
        console.error('Profil eklenirken hata oluştu:', err);
    } finally {
        mongoose.connection.close();
    }
}

addProfileToDB(); 
