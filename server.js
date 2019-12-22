require('dotenv').config();
const express = require('express');
// const routes = require('./routes/routes');
const cors = require('cors');
const helmet = require('helmet');
const logger = require('morgan');
const server = express();
const PORT = process.env.PORT || 9090;

server.use(express.json(), logger('tiny'), helmet(), cors());

// Error handler
const errorHelper = (status, message, res) => {
    res.status(status).json({ error: message });
};

// server.use('/api/cats', catRoutes); will be used later
// server.use('/api/dogs', dogRoutes); will be used later

server.get('/', (req, res, next) => {
    res.send(`
    <h2>Adopt Me pet adoption</h2>
    <p>Welcome to the Adopt me pet adoption API</p>
    `);
});

server.listen(PORT, () => {
    console.log('\n*** Server Running on PORT ${PORT} ***\n');
})
