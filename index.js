const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Route')
})

app.get('/about', (req, res) => {
    res.send('About Route')
})

app.get('/blog', (req, res) => {
    res.send('Blog Route')
})

app.listen(8000, () => {
    console.log('Server up and running on port 8000')
})