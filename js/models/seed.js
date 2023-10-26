const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://enesozdmr:1234567890@cluster0.ccrouoo.mongodb.net/suaritma';

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const Marks = require('./Marks');
const Model = require('./Model');

// "Marks" koleksiyonuna markaları ekleyin
const marksData = [
    { name: "Arçelik" },
    { name: "Beko" },
    { name: "Siemens" }
];

Marks.insertMany(marksData)
    .then((marks) => {
        console.log('Markalar MongoDB\'ye eklendi.');
        // Marka eklemesi tamamlandığında "Model" koleksiyonuna modelleri ekleyin
        const modelData = [
            { name: "A serisi", mark: marks[0]._id },
            { name: "B Serisi", mark: marks[1]._id }
            // Eklemek istediğiniz diğer modelleri buraya ekleyin
        ];

        Model.insertMany(modelData)
            .then(() => {
                console.log('Modeller MongoDB\'ye eklendi.');
            })
            .catch((error) => {
                console.error('Modeller eklenirken hata oluştu:', error);
            });
    })
    .catch((error) => {
        console.error('Markalar eklenirken hata oluştu:', error);
    });
