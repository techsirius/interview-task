const { DateTime } = require("luxon");
const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');
const User = require('../models/user');

module.exports = {

    async fetch(req, res) {

        try {

            const data = await User(sequelize, DataTypes).findOne();

            res.status(201).send(data);

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

    async update(req, res) {

        try {
            const obj = await User(sequelize, DataTypes).findOne();

            if (obj) {

                let now = DateTime.now();

                let data = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    updated_at: now.toFormat("yyyy-LL-dd HH:mm:ss"),
                };

                await obj.update(data);

                res.status(201).send(obj)

            } else {

                res.status(404).send("ID Not Found")

            }

        } catch (e) {

            console.log(e);

            res.status(500).send(e);

        }
    }

}