const express = require('express');
const methodOverride = require('method-override');
const app = express();
const PORT = 4000;
const mainRoutes = require('./src/routes/mainRoutes');
const shopRoutes = require('./src/routes/shopRoutes');
const admimnRoutes = require('./src/routes/adminRoutes');

app.use(methodOverride('_method'));
app.use(express.urlencoded());
app.use(express.json());

app.use(express.static('public'));
app.use('/', mainRoutes);
app.use('/shop', shopRoutes);
app.use('/admin', admimnRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto http://localhost:${PORT}`));