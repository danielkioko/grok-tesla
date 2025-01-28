require('dotenv').config();
const express = require('express');
const authRoutes = require('./routes/authRoutes');
const vehicleRoutes = require('./routes/vehicleRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/vehicle', vehicleRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 