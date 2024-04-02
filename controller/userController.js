const express = require("express");
const router = express.Router();
const User = require('../model/user');
const cuid = require('cuid');

router.post('/create-user', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const payload = {
            id: cuid(),
            name,
            email,
            phone
        }
        const user = new User(payload);
        let response;
        try {
            response = await user.save();
            console.log("Save operation was successful.");
        } catch (error) {
            console.error(error);
        }
        return res.status(200).json({ message: "users", data: response });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})
router.get('/users', async (req, res) => {
    try {
        const response = await User.scan().exec();
        return res.status(200).json({ message: "users", data: response });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})


router.get('/user/:id', async (req, res) => {
    try {
        const user = await User.get({ id: req.params.id });
        return res.status(200).json({ message: "users", data: user });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

router.put('/user/:id', async (req, res) => {
    try {
        const user = await User.get({ id: req.params.id });
        user.name = req.body.name;
        const response = await user.save();
        return res.status(200).json({ message: "users", data: response });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

router.delete('/user/:id', async (req, res) => {
    try {
        const response = await User.delete({ id: req.params.id });
        return res.status(200).json({ message: "users", data: response });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})


module.exports = router