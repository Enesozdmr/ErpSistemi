const mongoose = require('mongoose');
const Role = require('./Roles');


const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });


async function seedRoles() {
    try {
        const roles = [
            'Admin',
            'Company Admin',
            'Parça Yönetim Sorumlusu',
            'Üretim Sorumlusu',
            'Satış Sorumlusu',
            'Bakım Sorumlusu',
            'Muhasebe',
            'Bayi'
        ];

        for (const roleName of roles) {
            const existingRole = await Role.findOne({ name: roleName });
            if (!existingRole) {
                const role = new Role({ name: roleName });
                await role.save();
                console.log(`Rol ekleniyor: ${roleName}`);
            } else {
                console.log(`Rol zaten mevcut: ${roleName}`);
            }
        }

        console.log('Tüm roller başarıyla eklendi.');
    } catch (error) {
        console.error('Roller eklenirken hata oluştu:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedRoles(); 
