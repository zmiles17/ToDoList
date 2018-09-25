const list = [];
 module.exports = function(app){
    app.post('/add', function(req, res){
       list.push(req.body.TodoItem);
       res.send(list);
    });
    app.get('/api/list', function(req, res){
        res.json(list);
    });
    app.delete('/delete', function(req, res){
         list.splice(req.body.index, 1);
         res.json(list);
         console.log(list);
    });
    // app.put('/update', function(req, res){
        
    // })
}
