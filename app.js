const express= require ('express');
const path = require ('path');
const methodOverride = require('method-override');
const session = require('express-session');
const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');
let app =express();
const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath) );
app.set('view engine', 'ejs');

app.use(session({
    secret : 'topSecret',
    resave: false,
    saveUninitialized: false,
}))

app.use(userLoggedMiddleware);

const rutasHome = require('./routes/home');
const rutasLogin = require('./routes/login');
const rutasDetalle = require('./routes/detalle');
const rutasProductos = require('./routes/productos');
const rutasRegister = require('./routes/register');
const rutasShopCar = require('./routes/shop-car');
const rutasSellCar = require('./routes/formularioVenta');
const rutasEditCar = require('./routes/formularioEdit');
const rutasAdministrar = require('./routes/formularioAdministrar');
const rutasDelete = require ('./routes/formularioDelete');
// lineas para que funciones POST
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(methodOverride('_method'));

app.listen(process.env.PORT || 3050 , function (){
    console.log("Servidor corriendo en el puerto 3050");
})

app.use('/productos', rutasProductos);

app.use('/', rutasHome);

app.use('/register', rutasRegister);

app.use('/shop-car', rutasShopCar);

app.use('/login', rutasLogin);

app.use('/detalle', rutasDetalle);

app.use('/vender', rutasSellCar);

app.use('/editar', rutasEditCar);

app.use('/administrar', rutasAdministrar);

app.use('/delete', rutasDelete);

app.use(rutasLogin);