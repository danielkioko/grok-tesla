const express = require('express');
const router = express.Router();
const teslaService = require('../services/teslaService');
const grokService = require('../services/grokService');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.post('/command', async (req, res) => {
  try {
    const { vehicleId, userInput } = req.body;
    
    // Use Grok to interpret the user's command
    const interpretation = await grokService.interpretVehicleCommand(userInput);
    
    // Extract the Tesla API command from Grok's interpretation
    const { command, parameters } = interpretation;
    
    // Execute the command using Tesla API
    const result = await teslaService.executeVehicleCommand(
      req.user.teslaToken,
      vehicleId,
      command,
      parameters
    );
    
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add specific command endpoints
router.post('/wake_up/:vehicleId', async (req, res) => {
  try {
    const result = await teslaService.executeVehicleCommand(
      req.user.teslaToken,
      req.params.vehicleId,
      'wake_up'
    );
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add more specific command endpoints here...

module.exports = router; 