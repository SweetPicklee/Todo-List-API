var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    todoRoutes = require('./routes/todos');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('hi');
})

app.use('/api/todos', todoRoutes)

app.listen(process.env.PORT || 3000);