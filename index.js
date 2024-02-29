const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db/db');

require('dotenv').config();

connectToMongo();

const app = express();
const PORT = process.env.NOTES_PORT || 3002;

app.use(cors());
app.use(express.json());

// Use your notes routes
app.use('/api/notes', require('./routes/notesRoutes'));

app.listen(PORT, () => {
  console.log(`Notes microservice started on http://localhost:${PORT}`);
});
