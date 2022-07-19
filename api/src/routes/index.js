const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogameRouter=require('./videogame');
const genderRouter=require('./gender');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogame',videogameRouter);
router.use('/gender',genderRouter)




module.exports = router;
