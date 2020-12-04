const express = require('express');
const app = express();
const Stack = require('./Stack.js');
const linter = require('./linter.js');

app.use(express.json());

//endpoints
app.post('/', (req, res) => {
    const stack = new Stack(req.body.code);
    const isItAFunction = linter(stack);
    res.send(isItAFunction);
})

//listen
app.listen(7890, () => {
    console.log('started on 7890')
});