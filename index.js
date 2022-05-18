const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile('homepage.html', {root:__dirname + "/public"})
})

app.all('*',(req,res)=>{
    res.send('ndo cazzo vai')
})



app.listen(3000)
