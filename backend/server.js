const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const messagesRoute = require('./routes/messages');
require('dotenv').config(); // For .env file

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/messages', messagesRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
