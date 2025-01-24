const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// API endpoint
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Backend!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
