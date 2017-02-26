const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const i18n = require("i18n");
var fs = require('fs');

i18n.configure({
    locales: ['en'],
    directory: __dirname + '/locales',
    autoReload: true
});

i18n.setLocale('en');

app.use(i18n.init);
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}))

var db
const MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/reason', (err, database) => {
    if (err) return console.log(err)
    db = database

    app.listen(3000, function() {
        console.log('listening on 3000');

        app.get('/', (req, res) => {
            var cursor = db.collection('quotes').find();
            db.collection('replies').find().toArray(function(err, results) {
                res.render('index.ejs', {
                    replies: results
                })
            })

            //res.render(view, locals)
            //res.sendFile(__dirname + '/index.html')
        });

        /*app.post('/reply', (req, res) => {
            db.collection('replies').save(req.body, (err, result) => {
                if (err) return console.log(err)
                console.log('saved to database')
                res.redirect('/')
            })
        }) */

        var path = 'routes/';
        fs.readdir(path, function(err, items) {
            for (var i = 0; i < items.length; i++) {
                eval(fs.readFileSync('routes/' + items[i]) + '');
            }
        });
    });
})
