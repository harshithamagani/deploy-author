const mainController = require('../controllers/controllers')

module.exports = (app) => {

    app.get('/authors',(req,res) => {
        return mainController.findAllAuthor(req, res);
    })
    
    app.post('/authors',(req,res) => {
        return mainController.createNewAuthor(req, res);
    })
    
    app.get('/authors/:id',(req,res) => {
        return mainController.findAuthor(req, res);
    })
    
    app.put('/authors/:id',(req,res) => {
        return mainController.updateTaskByID(req, res);
    })

    app.delete('/authors/:id',(req,res) => {
        return mainController.deleteTaskByID(req, res);
    })
    }