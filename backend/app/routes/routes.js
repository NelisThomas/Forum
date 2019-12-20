module.exports = function(app, db) {

    var ObjectID = require('mongodb').ObjectID;

    app.get('/posts/:id', (req, res) => {
        const details = { '_id': ObjectID };
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
        const data = req.body;
        const post = JSON.parse(Object.keys(data)[0]);
        db.collection('posts').insert(post, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        });
    });
    app.delete('/posts', (req, res) => {
        const id = Object.keys(req.body)[0];
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