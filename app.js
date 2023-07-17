const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;

/* Importando las rutas */
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const admimnRoutes = require('./src/routes/adminRoutes');

/* Carpeta con archivos estaticos */
app.use(express.static('public'));

/* Habilitando los metodos PUT y DELETE */
app.use(methodOverride('_method'));

/* Parsear los datos recibidos */
app.use(express.urlencoded());
app.use(express.json());

/* Rutas de la aplicacion */
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', admimnRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`));