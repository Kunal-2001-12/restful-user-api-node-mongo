// Entry point for the application
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const userRoutes = require('./routes/userRoutes');

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/userdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/users', userRoutes);

app.get('/test', (req, res) => {
    res.send('Test route working');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
