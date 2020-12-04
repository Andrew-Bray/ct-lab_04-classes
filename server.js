const express = require('express');
const app = express();
//const Stack = require('./Stack.js');
const { runStack } = require('./Linter.js');

app.use(express.json());

const PORT = 7890;

//endpoints
app.post('/', (req, res) => {
    const myFunction = `${req.body.code}`;
    console.log(myFunction);

    const isItAFunction = runStack(myFunction);
    res.send({"isItAFunction": isItAFunction});
})

//listen
app.listen(PORT, () => {
    console.log(`started on ${PORT}`)
});