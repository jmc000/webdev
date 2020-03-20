const express = require('express')
const app = express()
const port =3000
const path = require('path')


app.get('/api/version', function (req, res) {
  res.send('Welcome !')
})

app.use('/',express.static(path.resolve(__dirname,'../client/dist')))

app.use('*',function(req,res){
  res.status(404).sendFile(path.resolve(__dirname,'../client/dist/404.html'))
})

app.listen(port, () => console.log(`application running on port ${port}`))