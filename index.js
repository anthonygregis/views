const express = require('express')
const app = express()

app.get('/', function(req, res) {
    res.send('This is working')
});


app.listen('8000', () => {
    console.log('app is up and running on 8000')
})