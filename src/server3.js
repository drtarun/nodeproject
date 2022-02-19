//const hbs = require("hbs")
const express = require("express")
const path = require("path")
var webdir = path.join(__dirname,"..", "./website1")
console.log(webdir)
const app = express()
app.set('view engine','hbs')
//app.use(express.static(web))
///const app =express()
//app.set('view engine','hbs')
app.use(express.static(webdir))
app.get('', (req, res)=>{
    res.render('index', {
     'title':'Tarun',
     'Universiy':'CURAJ'
 })
})
app.get('/page.html', (req, res)=>{
var name = req.query.title
//console.log(name)
res.render('page', {'title':name})
})

app.listen(3000, ()=>{
    console.log("Server is started on port number 3000")
})