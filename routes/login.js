app.post('/manager/login', (req, res) => {
    db.collection('manager').findOne({
        "name": req.body.name
    }, function(err, document) {
        console.log(document);
        if (bcrypt.compareSync(req.body.password, document.password)) {
            res.redirect('/manager/dashboard');
        } else { //wrong password
            res.redirect('/?callback=wrong_password');
        }
    });
});

app.post('/manager', (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, salt);
    req.body.level = 0;
    console.log(req.body);
    db.collection('manager').save(req.body, (err, result) => {
        if (err) return console.log(err)
        console.log('novo usuario cadastrado no manager')
        res.redirect('/')
    })
})
