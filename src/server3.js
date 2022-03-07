//const hbs = require("hbs")
const express = require("express")
const path = require("path")
var webdir = path.join(__dirname,"..", "./website1")
var viewpath = path.join(__dirname,"..", "./src/views")
var jspath = path.join(__dirname,"..", "./src/js")

console.log(viewpath)
const app = express()
app.set('view engine','hbs')
app.set('views', viewpath)
//app.use(express.static(web))
///const app =express()
//app.set('view engine','hbs')
app.use(express.static(webdir))
app.get('', (req, res)=>{
    res.render('index', {
     'path':jspath,
     'Universiy':'CURAJ Ajme (Rajasthan)'
 })
})
app.get('/login.html', (req, res)=>{
//console.log(req.query)
res.render('login', {'user':req.query.name,
'city':req.query.city})
})

app.listen(3000, ()=>{
    console.log("Server is started on port number 3000")
})