const { Router } = require('express');
const platformController = require ('../controllers/platform');

const router = Router();

router.get('/',platformController.getPlatform)

module.exports = router;