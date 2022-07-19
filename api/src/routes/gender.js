const { Router } = require('express');
const genderController = require ('../controllers/gender');

const router = Router();

router.get('/',genderController.getAll)

module.exports = router;