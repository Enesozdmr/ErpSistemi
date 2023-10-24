const express = require('express');
const router = express.Router();
const personelProfileController = require('../Controllers/personelProfileController');

// Tüm personel profillerini getiren bir GET isteğini yönlendir
router.get('/profiles', personelProfileController.getAllPersonelProfiles);

module.exports = router;
