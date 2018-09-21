const list = require('../Data/todolist');

module.exports = function(app){
    
    app.post('/add', function(req, res){
       console.log(req.body);
       list.push(req.body);
       res.send(list);
    //    res.redirect('/');
    })
    app.get('/', function(req, res){
        res.json(list);
    })
    app.get('/api/list', function(req, res){
        res.json(list);
    })
}
