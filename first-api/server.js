const express = require('express')
const app = express()

app.listen(80)

const db = [{}]

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/api', (req, res) => {
    res.json(db)
})

app.post('/api', (req, res) => {
    const { name, dni, vote } = req.body
    console.log(req.body)
    if(!name || !dni || !vote) res.status(400).send('Invalid request\'s body')
    db.push({ name, dni, vote })
    res.send('All ok')
})


