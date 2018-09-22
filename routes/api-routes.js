const list = [];
 module.exports = function(app){
    app.post('/add', function(req, res){
       console.log(req.body);
       list.push(req.body.Todo);
       res.redirect('/');
    });
    app.get('/api/list', function(req, res){
        res.json(list);
    });
} 