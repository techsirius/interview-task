// const webRankController = require('../controllers/web_rank');
// const labController = require('../controllers/Lab');

module.exports = (app) => {

    app.get('/', (req, res) => {
        res.status(200).send({
            data: "Welcome Node Home API v1"
        })
    })

    // app.get('/lab/test', labController.test);

}