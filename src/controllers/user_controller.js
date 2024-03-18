const { request } = require('express');
const userModel = require('../models/user_model.js');

const createUser = async(req, res) => {
    try {
        const {
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        } = req.body;

        const newUser = await userModel.create({
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        });
        console.log(newUser);
        res.status(201).json(newUser);
        //console.log(req.body);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
const listUser = async(req, res) => {
    try {
        const users = await userModel.find();
        res.status(200).json(users);
    } catch (error) {
        
    }
};
const getUser = async(req, res) => {
    try {
        const {id} = request.params;
        console.log(id);
        const user = await userModel.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
const editUser = async(req, res) => {
    try {
        const {id} = request.params;
        const {
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        } = req.body;
        //console.log(id);
        //console.log(req.body);
        const user = await userModel.findByIdAndUpdate(id, {
            user_name,
            lastname,
            nationality,
            document,
            user_email,
            password,
            user_active,
        });
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
};
const deleteUser = async(req, res) => {
    try {
        const {id} = request.params;
        const user = await userModel.findByIdAndDelete(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message});

    }
};

module.exports = {
    createUser,
    listUser,
    getUser,
    editUser,
    deleteUser
}