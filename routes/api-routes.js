const list = require('../Data/todolist');

module.exports = function(app){
    
    app.post('/add', function(req, res){
       list.push(req.body.TodoItem);
       res.send(list);
    //    res.redirect('/');
    })
    app.get('/', function(req, res){
        res.json(list);
    })
    app.get('/api/list', function(req, res){
        res.json(list);
    })
    app.delete('/delete', function(req, res){
         list.splice(req.body.index, 1);
         res.json(list);
         console.log(list);
    })
}
