import express from "express";
import { getCars,getCarsWhere, getCarsById, createCars, updateCars, deleteCars } from "../controllers/Cars.js";
import Cars from "../models/CarsModel.js";
import { upload } from "../upload.js";
const router = express.Router();
const app = express();



app.use(express.json())
app.use(express.urlencoded({extended:true}));

router.get('/cars/', getCars);
router.get('/cars/add', (req, res, next) => {
    res.render('add.ejs',({title : "Add New Cars"}))
  })
router.get('/cars/:size',getCarsWhere);
router.get('/cars/:id/edit',getCarsById);
router.post('/cars/add',upload.single('img'),createCars);
router.put('/cars/:id/edit',upload.single('img'), updateCars);
router.delete('/cars/:id', deleteCars);




export default router;