const mongoose = require('mongoose');
const Author = mongoose.model('Author');

module.exports = {
    findAllAuthor: (req,res) => {
        Author.find()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    findAuthor: (req,res) => {
        var id = req.params.id;
        Author.find({_id:id})
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
    },
    createNewAuthor: (req,res) => {
        Author.create(req.body)
            .then(data => {
                res.json(data);
            })
            .catch(err => {
                res.json(err);
            });
    },
    
    updateTaskByID: (req, res) => {
        var id = req.params.id;
        Author.findOneAndUpdate({ _id: id }, req.body, { runValidators: true })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },

    deleteTaskByID: (req, res) => {
        var id = req.params.id;
        Author.remove({ _id: id })
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    },
}