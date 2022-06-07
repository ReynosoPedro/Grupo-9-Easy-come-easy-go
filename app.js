const express= require ('express');
const path = require ('path');
let app =express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );

app.listen(process.env.PORT || 3050 , function (){
    console.log("Servidor corriendo en el puerto 3000");
})

app.get('/productos', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/productos.html'));
})

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

app.get('/shop-car', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/shop-car.html'));
})

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
})