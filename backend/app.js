const express = require('express');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

// Routers
const { usersRouter } = require('./routes/users.routes');
const { viewsRouter } = require('./routes/views.routes');

// Global err controller
const { globalErrorHandler } = require('./controllers/error.controller');

// Utils
const { AppError } = require('./utils/appError.util');

// Init express
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(compression());
app.use(helmet());

app.use(rateLimit({
    max: 10000,
    windowMs: 60 * 60 * 1000, // 1 hr
    message: 'Number of requests have been exceeded',
}));

app.use(morgan(
    process.env.NODE_ENV === 'development' ? 'combined' : 'dev'
));

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));


// Define endpoints
app.use('/api/v1/users', usersRouter);
app.use('/*', viewsRouter);

// Handle incoming unknown routes to the server
app.all('*', (req, res, next) => {
    next(
        new AppError(
            `${req.method} ${req.originalUrl} not found in this server`,
            404
        )
    );
});

app.use(globalErrorHandler);

module.exports = { app };