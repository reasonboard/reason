app.get('/manager/channels', (req, res) => {
    db.collection('channels').find().toArray(function(err, results) {
        res.render('admin/channels.ejs', {
            channels: results
        });
    });
});

app.post('/manager/channels', (req, res) => {
    //check if channel already exists
    db.collection('channels').find({
        code: req.body.code
    }).count(function(err, count) {
        if (count <= 0) {
            db.collection('channels').save(req.body, (err, result) => {
                if (err) return console.log(err)
                res.redirect('/manager/channels')
            });
        } else {
            res.redirect('/manager/channels/?callback=duplicated_channel_attempt')
        }
    });
});

app.get('/manager/channels/remove/*', (req, res) => {
    db.collection('channels').remove({
        _id: ObjectId(req.params[0])
    });
    res.redirect('/manager/channels');
});

//FIXME
//It's only update one field. the objective is to send the document.
app.put('/manager/channels/', (req, res) => {
    console.log(req.body);
    const prop = req.body.name;
    const value = req.body.value;
    const _id = req.body.pk;
    var document = {};
    document[prop] = value;
    db.collection('channels').update({
        _id: ObjectId(_id)
    }, {
        $set: document
    }, function() {
        res.sendStatus(201);
    });
});
