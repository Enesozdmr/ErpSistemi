const mongoose = require('mongoose');
const Unit = require('../models/Units');
const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const unitsData = ["KG", "Adet", "Metre", "Litre", "Metre Kare", "Merte Küp"];

const unitsToInsert = unitsData.map(name => ({ name }));

Unit.insertMany(unitsToInsert)
    .then(() => {
        console.log('Birim verileri MongoDB\'ye eklendi.');
    })
    .catch((error) => {
        console.error('Birim verileri eklenirken hata oluştu:', error);
    });
