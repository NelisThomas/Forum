module.exports = function(app, db) {

    var ObjectID = require('mongodb').ObjectID;

    app.get('/posts/:id', (req, res) => {
        const details = { '_id': ObjectID };
        console.log(details);
        db.collection('posts').findOne(details, (err, item) => {
            if(err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(item);
            }
        });
    })
    app.get('/allposts', (req, res) => {
        db.collection('posts').find({}).toArray(function(error, documents) {
            if (error) throw error;
        
            res.send(documents);
        });
    })
    app.post('/posts', (req, res) => {
        // const {name,text,url} = req.body;
        const post = {
            name: req.body.name,
            text: req.body.text,
            url: req.body.url
        };
        console.log(req.body);
        db.collection('posts').insert(post, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/posts/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('posts').remove(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send('post ' + id + ' deleted!');
            }
        });  
    });
    app.put('/posts/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        const post = { text: req.body.body, title: req.body.title };
        db.collection('posts').update(details, post, (err, result) => {
            if (err) {
                res.send({'error':'An error has occurred'});
            } else {
                res.send(post);
            }
        });
    });
};