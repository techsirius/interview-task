const { DateTime } = require("luxon");
const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');
const Employee = require('../models/employee');

// const scraper = require("../services/scraper");

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {

    async list(req, res) {

        try {

            const data = await Employee(sequelize, DataTypes).findAll({
                order: [
                    ['id', 'desc']
                ]
            });

            res.status(201).send(data);

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

    async create(req, res) {
        try {
            let now = DateTime.now();

            let data = {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                designation: req.body.designation,
                joining_date: now.toFormat("yyyy-LL-dd HH:mm:ss"),
                created_at: now.toFormat("yyyy-LL-dd HH:mm:ss"),
            };

            const employeeCollection = await Employee(sequelize, DataTypes)
                .create(data);

            res.status(201).send(employeeCollection);
        } catch (e) {
            console.log(e);
            res.status(400).send(e);
        }

    },

    async update(req, res) {

        try {
            const obj = await Employee(sequelize, DataTypes).findByPk(req.body.id);

            if (obj) {

                let now = DateTime.now();

                let data = {
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    designation: req.body.designation,
                    joining_date: now.toFormat("yyyy-LL-dd HH:mm:ss"),
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
    },

    async delete(req, res) {

        try {

            if (req.body.id != undefined) {
                const obj = await Employee(sequelize, DataTypes).findByPk(req.body.id);

                if (obj) {

                    await obj.destroy();
                    res.status(201).send(obj);

                } else {

                    res.status(404).send("ID Not Found");

                }
            } else {

                deleteRow(req.body.ids);
                res.status(201).send('success');
            }

        } catch (e) {

            console.log(e);
            res.status(500).send(e);

        }
    }

}

async function deleteRow(ids) {

    for (let i in ids) {
        const element = ids[i];

        const obj = await Employee(sequelize, DataTypes).findByPk(element);

        if (obj) {

            await obj.destroy();

        }

    }
}