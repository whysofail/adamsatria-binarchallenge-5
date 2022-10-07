import Cars from "../models/CarsModel.js";
import {fileURLToPath} from 'url';
import path from 'path';
import fs from "fs";
import moment from "moment";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
export const getCars = async(req, res) => {

    try {
        const cars = await Cars.findAll();
        res.render('cars.ejs', {moment:moment ,cars, title : 'Home', message: req.flash('info')})
    } catch (error) {
        console.log(error);
    }
}
export const getCarsWhere = async (req, res) => {
    try {
        const cars = await Cars.findAll({
            where :{
                capacity : req.params.size
            }   
        })
        res.render('cars.ejs', {moment:moment ,cars, title : 'Home', message: req.flash('info')})
    } catch (error) {
        console.log(error);
    }
}
export const getCarsById = async (req, res) => {
    try {
        const cars = await Cars.findOne({
            where: {
                id: req.params.id
            }
        });
        
        res.render('edit.ejs', {moment:moment ,cars, title : 'Home'})
    } catch (error) {
        res.json({ message: error.message });
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
        req.flash('info', 'Data berhasil disimpan')
       res.redirect('/cars')
    } catch (err) {
        console.log(err);
    }
}

export const updateCars = async(req, res) => {
    try {
        // //Delete old photo
        // const cars = await Cars.findByPk(req.params.id)
        // const oldPhoto = path.join(__dirname,'..','/uploads/',cars[0].img)
        // console.log(oldPhoto)
        // fs.unlinkSync(oldPhoto);
        await Cars.update({
            name : req.body.name,
            capacity : req.body.capacity,
            description : req.body.description,
            rent : req.body.rent,
            img : req.file === undefined ? "" : req.file.filename,
            created : Cars.created, // Prevent 'created' fields being automatically changed.
            updated : new Date()
        }, 
        {
            where: {
                id: req.params.id
            }
        });
        res.redirect('/cars')
    } catch (err) {
        console.log(err);
        console.log(req.file)
    }
}

export const deleteCars = async (req, res) => {
    try {
        // //Delete old photo
        // const cars = await Cars.findByPk(req.params['id'])
        // if(cars.img){
        //     return oldPhoto = path.join(__dirname,'..','/uploads/',cars.img)
        // }
        
        // console.log(oldPhoto)
        // fs.unlinkSync(oldPhoto);
        await Cars.destroy({
            where: {
                id: req.params.id
            }
        });
        req.flash('info', 'Data berhasil dihapus')
        res.redirect('/cars')
    } catch (err) {
        console.log(err);
    }
}