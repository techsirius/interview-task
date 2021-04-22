const employee = require('../controllers/employee');
// const labController = require('../controllers/Lab');

module.exports = (app) => {

    // app.get('/', (req, res) => {
    //     res.status(200).send({
    //         data: "Welcome Node Home API v1"
    //     })
    // })

    app.get('/employee/list', employee.list);

    // app.get('/lab/test', labController.test);

}