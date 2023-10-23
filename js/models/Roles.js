
const mongoose = require('mongoose');

const roleSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: [
            'Admin',
            'Company Admin',
            'Parça Yönetim Sorumlusu',
            'Üretim Sorumlusu',
            'Satış Sorumlusu',
            'Bakım Sorumlusu',
            'Muhasebe',
            'Bayi'
        ],
        required: true
    }
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
