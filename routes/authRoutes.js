const express = require('express');
const router = express.Router();
const teslaService = require('../services/teslaService');
const jwt = require('jsonwebtoken');

router.post('/tesla', async (req, res) => {
  try {
    const { email, password } = req.body;
    const teslaAuth = await teslaService.authenticate(email, password);
    
    // Create JWT token with Tesla token
    const token = jwt.sign(
      { teslaToken: teslaAuth.access_token },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

module.exports = router; 