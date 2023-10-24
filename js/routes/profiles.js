const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /api/profiles:
 *   get:
 *     summary: Tüm profilleri getir
 *     description: Tüm personel profillerini getirir.
 *     responses:
 *       200:
 *         description: Başarılı istek
 */
router.get('/api/profiles', (req, res) => {
    // API işlemlerini burada gerçekleştirin
    res.status(200).json({ message: 'Tüm profiller getirildi.' });
});

module.exports = router;
