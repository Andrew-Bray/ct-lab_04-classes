const express = require('express');
const app = express();
const Stack = require('./Stack.js');

app.use(express.json());

//endpoints
app.post('/', (req, res) => {
    const stack = new Stack(___);//send up a const as a new promise
    res.send(Stack._method())
})

//listen
app.listen(7890, () => {
    console.log('started on 7890')
});