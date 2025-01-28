const axios = require('axios');
const config = require('../config/config');

class TeslaService {
  constructor() {
    this.baseURL = process.env.TESLA_API_BASE_URL;
    this.axiosInstance = axios.create({
      baseURL: this.baseURL,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  async authenticate(email, password) {
    try {
      const response = await this.axiosInstance.post('/oauth/token', {
        grant_type: 'password',
        client_id: process.env.TESLA_CLIENT_ID,
        client_secret: process.env.TESLA_CLIENT_SECRET,
        email,
        password
      });
      return response.data;
    } catch (error) {
      throw new Error(`Tesla authentication failed: ${error.message}`);
    }
  }

  async executeVehicleCommand(token, vehicleId, command, params = {}) {
    try {
      const response = await this.axiosInstance.post(
        `/vehicles/${vehicleId}/command/${command}`,
        params,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );
      return response.data;
    } catch (error) {
      throw new Error(`Vehicle command execution failed: ${error.message}`);
    }
  }
}

module.exports = new TeslaService(); 