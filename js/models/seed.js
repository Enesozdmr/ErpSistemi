const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const CompanyBillingAddress = require('./CompanyBillingAddress');
const CompanyProfile = require('./CompanyProfile');

// İlk CompanyProfile kaydını bulma
CompanyProfile.findOne().then((firstCompanyProfile) => {
    if (firstCompanyProfile) {
        const firstCompanyProfileID = firstCompanyProfile._id;

        const billingAddressData = [
            {
                companyProfileID: firstCompanyProfileID,
                billingType: 'Individual',
                addressName: 'Ev Adresi',
                name: 'John',
                surname: 'Doe',
                idNumber: '1234567890',
                companyName: '',
                taxNumber: '',
                taxOffice: '',
                phone: '1234567890',
                email: 'john@example.com',
                addressCountry: 'Country Name',
                addressState: 'State Name',
                addressCity: 'City Name',
                address: '123 Main St, Apt 4B',
            },
            {
                companyProfileID: firstCompanyProfileID,
                billingType: 'Institutional',
                addressName: 'Company HQ',
                name: '',
                surname: '',
                idNumber: '',
                companyName: 'ACME Inc.',
                taxNumber: '0987654321',
                taxOffice: 'Tax Office Name',
                phone: '9876543210',
                email: 'info@acme.com',
                addressCountry: 'Another Country',
                addressState: 'Another State',
                addressCity: 'Another City',
                address: '456 Business Blvd',
            },
        ];

        CompanyBillingAddress.insertMany(billingAddressData)
            .then(() => {
                console.log('BillingAddress verileri MongoDB\'ye eklendi.');
            })
            .catch((error) => {
                console.error('BillingAddress verileri eklenirken hata oluştu:', error);
            });
    } else {
        console.error('İlk CompanyProfile kaydı bulunamadı.');
    }
}).catch((error) => {
    console.error('İlk CompanyProfile kaydını bulma hatası:', error);
});
