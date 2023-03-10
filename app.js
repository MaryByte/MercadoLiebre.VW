let express = require('express');

const path = require('path');

const port = process.env.PORT || 3030;

let app = express();


const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));


app.get ("/", (req, res)=>{
    res.sendFile (__dirname + "/Views/home.html")
});


app.get ("/login", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/login.html"))  
});

app.get ("/register", (req, res)=>{
    res.sendFile(path.resolve (__dirname, "./Views/register.html"))
});

app.listen(port,()=>console.log(`servidor escuchando en puerto ${port}`));