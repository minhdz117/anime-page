const express = require ("express")
const app = express()

app.set('views', './dist')
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html')

app.use(express.static('./dist'))

app.get("/",(req,res)=>{
    res.render("index")
})

const port =  process.env.PORT || 3000
app.listen(port ,()=>{
    console.log("Server start!!! http://localhost:"+port)
})