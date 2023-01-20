let express = require('express');

const path = require('path');

const port = process.env.PORT || 3000;

let app = express();


const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));



app.listen (port, ()=> 
    console.log ("servidor corriendo en puerto ${port}"));

app.get ("/", (req, res)=>{
    res.sendFile (__dirname + "/Views/home.html")
});


app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/login.html"))  
});

app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
});
