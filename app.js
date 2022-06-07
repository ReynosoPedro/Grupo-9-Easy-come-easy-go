const express= require ('express');
const path = require ('path');
let app =express();

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
})

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
})

