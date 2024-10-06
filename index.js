require('dotenv').config()
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger/swagger.json');
const dbConfig = require('./src/config/db.config')
const productRoutes = require('./src/routes')
const app = express();

// *********  Database Connection ************//
dbConfig.connectMongoDB();

//********* Middleware   ***********/ 
app.use(express.json());

// *********  Swagger ************//
app.use('/api-docs',swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//  *************   Router ******************//
app.use('/api', productRoutes)

app.get("/", (req, res) => {
    res.send("Hello Ajay")
})


const PORT = process.env.PORT || 5000
const server = app.listen(PORT, (err) => {
    if (err) {
        console.log("Server not started")
    } else {
        console.log(`Server running on port ${PORT}`)
    }
})