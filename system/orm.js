app.post('/manager/create/%', (req, res) => {

});

app.put('/manager/update/%', (req, res) => {

});

app.delete('/manager/delete/%', (req, res) => {
    db.collection(req.params[0]).remove({
        _id: ObjectId(req.params[1])
    });
});

app.get('/manager/read/%', (req, res) => {

});
