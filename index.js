const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Home Route')
})

app.listen(8000, () => {
    console.log('Server up and running on port 8000')
})