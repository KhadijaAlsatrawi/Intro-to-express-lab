const express = require('express')

const app = express()

app.use(express.static('public'));

app.get('/test', (req, res)=>{
    res.send('<p>Success!</p>')
})

/* app.get('/',(req, res)=>{
    res.send('<h1>Welcome to my application Khadija</h1>')
})
 */

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

/* app.get('/about', (req ,res)=>{
    res.send('<p>My name is Khadija Alsatrawi</p>')
}) */

app.get('/about', (req ,res)=>{
    res.sendFile(__dirname + '/views/about.html')
})

app.listen(3000,  ()=>{
    console.log('App is running')
})