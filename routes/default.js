app.get('/manager/dashboard', (req, res) => {
    res.render('admin/dashboard.ejs');
});

app.get('/manager/channels', (req, res) => {
    res.render('admin/channels.ejs');
});

app.get('/manager/boards', (req, res) => {
    res.render('admin/boards.ejs');
});

app.get('/manager/posts', (req, res) => {
    res.render('admin/posts.ejs');
});

app.get('/manager/configurations/general', (req, res) => {
    res.render('admin/general.ejs');
});

app.get('/manager/configurations/users', (req, res) => {
    res.render('admin/users.ejs');
});

app.get('/manager/configurations/banlist', (req, res) => {
    res.render('admin/banlist.ejs');
});

app.get('/manager/configurations/wordfilters', (req, res) => {
    res.render('admin/channels.ejs');
});
