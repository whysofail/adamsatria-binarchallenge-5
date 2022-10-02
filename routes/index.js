import express from "express";
import { getCars, getCarsById, createCars, updateCars, deleteCars } from "../controllers/Cars.js";
import { upload } from "../upload.js";
const router = express.Router();
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:false}));

router.get('/', getCars);
router.get('/:id',getCarsById)
router.post('/',upload.single('img',express.request),createCars);
router.put('/:id', updateCars);
router.delete('/:id', deleteCars);



export default router;