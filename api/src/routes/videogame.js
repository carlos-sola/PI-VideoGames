const { Router } = require('express');
const videogameController = require ('../controllers/videogame')

const router = Router();

router.get('/',videogameController.getAll);
router.post('/',videogameController.createVideogame);

module.exports = router;