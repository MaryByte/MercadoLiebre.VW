let express = require('express');

const path = require('path');

let app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));


app.listen (3000, ()=> {
    console.log ("servidor corriendo en puerto 3000")
});

app.get ("/", (req, res)=>{
    res.sendFile (__dirname + "/Views/home.html")
});

app.get ("/", (req, res)=>{
    res.sendFile (__dirname + "/Views/home.html")
});

app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/login.html"))  
});

app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
});