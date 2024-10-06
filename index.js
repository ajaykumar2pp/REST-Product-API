require('dotenv').config()
const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const dbConfig = require('./src/config/db.config')
const productRoutes = require('./src/routes')
const app = express();

// *********  Database Connection ************//
dbConfig.connectMongoDB();

//********* Middleware   ***********/ 
app.use(express.json());

//*********** Enable CORS for all routes **************// 
app.use(cors());

// *********  Swagger ************//
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// ********* Redirect root to /api-docs ************ //
app.get("/", (req, res) => {
    res.redirect('/api-docs');
});

//  *************   Router ******************//
app.use('/api', productRoutes)


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

server.on('error', (err) => {
    console.error('Failed to start the server:', err.message);
});