import Cars from "../models/CarsModel.js";
import moment from "moment"

export const getCars = async(req, res) => {
    
    try {
        const cars = await Cars.findAll();
        res.render('cars.ejs', {cars})
        res.json(cars)
    } catch (error) {
        console.log(error);
    }
}

export const getCarsById = async (req, res) => {
    try {
        const cars = await Cars.findByPk(req.params['id'])
        res.json(cars)
    } catch (error) {
        console.log(error);
    }
}

export const createCars = async (req, res) => {
    try {
        await Cars.create({
            name : req.body.name,
            capacity : req.body.capacity,
            description : req.body.description,
            rent : req.body.rent,
            img : req.file === undefined ? "" : req.file.filename,
            created : new Date()
        });

        console.log(req.file.filename)
        console.log(req.body)
        res.json({
            "message": "Product Created"
        });
    } catch (err) {
        console.log(err);
    }
}

export const updateCars = async(req, res) => {
    try {
        await Cars.update({
            name : req.body.name,
            capacity : req.body.capacity,
            description : req.body.description,
            rent : req.body.rent,
            img : req.file === undefined ? "" : req.file.filename,
            updated : new Date()
        }, 
        {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Updated"
        });
    } catch (err) {
        console.log(err);
    }
}

export const deleteCars = async (req, res) => {
    try {
        await Cars.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Product Deleted"
        });
    } catch (err) {
        console.log(err);
    }
}