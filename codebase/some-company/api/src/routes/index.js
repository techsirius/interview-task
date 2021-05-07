const employee = require('../controllers/employee');
const profile = require('../controllers/profile');

module.exports = (app) => {

    // app.get('/', (req, res) => {
    //     res.status(200).send({
    //         data: "Welcome Node Home API v1"
    //     })
    // })

    app.get('/employee/list', employee.list);
    app.get('/employee', employee.fetch);
    app.post('/employee', employee.create);
    app.put('/employee', employee.update);
    app.delete('/employee', employee.delete);

    app.get('/settings', profile.fetch);
    app.put('/settings', profile.update);

    // app.get('/lab/test', labController.test);

}