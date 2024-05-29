import { Router } from "express"; 

const router = Router();

router.get('/', (req, res) => res.render('index', { titulo: 'portafolio' }))




export default router;
