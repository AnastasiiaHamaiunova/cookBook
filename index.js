const express = require('express');
const bodyParser = require('body-parser');
const dataJson = require('./book');
const cors = require('cors');
var fs = require('fs');

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/', (req, res) =>{
    res.json(dataJson);
});

app.post('/', (req, res) => {
    var data = req.body;
    dataJson.push(data);

    fs.writeFile('./book.json', JSON.stringify(dataJson), 'utf-8', function(err) {
        if (err) throw err
        res.send();
    });
});

app.listen(3000, () => {
    console.log('Server started on 3000 port');
} )