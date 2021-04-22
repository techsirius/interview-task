// const { DateTime } = require("luxon");
const { DataTypes } = require('sequelize');

const sequelize = require('../database/connection');
const Employee = require('../models/employee');

// const scraper = require("../services/scraper");

// const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

module.exports = {

    async list(req, res) {

        try {

            const data = await Employee(sequelize, DataTypes).findAll();

            res.status(201).send(data);

        } catch (e) {
            console.log(e);
            res.status(500).send(e);
        }

    },

    // async create(req,res) {
    //     try {
    //         const userCollection = await User
    //         .create({
    //             email : req.body.email,
    //         });

    //         res.status(201).send(userCollection);
    //     }
    //     catch(e){
    //         console.log(e);
    //         res.status(400).send(e);
    //     }

    // },

    async update(req, res) {

        try {
            const obj = await WebRankInterface(sequelize).findByPk(req.body.wri_id);

            if (obj) {

                let now = DateTime.now();

                obj.update({
                    keyword: `ro service done ${now}`
                });

                res.status(201).send(obj)

            } else {

                res.status(404).send("ID Not Found")

            }

        } catch (e) {

            console.log(e);

            res.status(500).send(e);

        }
    },

    async scrapPage(req, res) {

        try {
            let website_id = req.query.website_id;
            let token = md5(`${website_id}_${ DateTime.now().toFormat( 'x' )}`);
            let website = await Website(sequelize, DataTypes)
                .findByPk(website_id);

            const list = await WebRankInterface(sequelize).findAll({
                where: {
                    website_id,
                    token: '-1',
                    status: 'new',
                },
                limit: 1
            });

            if (list) {
                // list.forEach((value, key) => {

                for (const key in list) {
                    if (Object.hasOwnProperty.call(list, key)) {
                        const element = list[key];

                        scraper.scrapPage({
                            query: element.keyword,
                            location: element.location,
                            uule: element.uule,
                            id: element.id,
                            // created_at  :  element.created_at
                            token,
                            num: website.result_count
                        }).then((data) => {
                            console.log(data)
                        })

                        let i = Math.floor(Math.random() * 10) + 10

                        await delay(i * 1000);

                    }
                }

                // });
            } else {
                console.log('No data found')
            }

            let msg = 'web scraping has been finished';

            res.status(200).send(msg)

            console.log(msg)

        } catch (e) {

            console.log(e);

            res.status(500).send(e);

        }
    }
}