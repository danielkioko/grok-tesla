# Tesla-Grok API Integration

A Node.js Express API that integrates Tesla's Fleet API with Grok AI to enable natural language control of Tesla vehicles.

## 🚗 Features

- Natural language processing of vehicle commands using Grok AI
- Complete Tesla Fleet API integration
- JWT-based authentication
- RESTful API endpoints for all Tesla vehicle commands
- Modular and maintainable codebase

## 🛠️ Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Tesla Developer Account
- Grok API access
- Tesla vehicle ownership

## 📦 Installation

1. Clone the repository:

    bash
    git clone https://github.com/yourusername/tesla-grok-api.git
    cd tesla-grok-api

2. Install dependencies:

bash
npm install

3. Configure environment variables:
   Create a `.env` file in the root directory and add:
        env
        PORT=3000
        TESLA_CLIENT_ID=your_tesla_client_id
        TESLA_CLIENT_SECRET=your_tesla_client_secret
        TESLA_API_BASE_URL=https://owner-api.teslamotors.com/api/1
        GROK_API_KEY=your_grok_api_key
        JWT_SECRET=your_jwt_secret

4. Start the server:

    bash
    npm run dev # for development
    npm start # for production


## 🔑 Authentication

1. Obtain Tesla API credentials:
   - Register at [Tesla Developer Portal](https://developer.tesla.com)
   - Create a new project to get your Client ID and Secret

2. Authenticate with the API:

    bash
    curl -X POST http://localhost:3000/api/auth/tesla \
    -H "Content-Type: application/json" \
    -d '{"email": "your_tesla_email", "password": "your_tesla_password"}'


## 🚀 Usage

### Natural Language Commands

Send commands in natural language:
    bash
    curl -X POST http://localhost:3000/api/vehicle/command \
    -H "Authorization: Bearer YOUR_JWT_TOKEN" \
    -H "Content-Type: application/json" \
    -d '{
    "vehicleId": "your_vehicle_id",
    "userInput": "turn on the air conditioning and set temperature to 72 degrees"
    }'

### Direct Commands

Use specific command endpoints:

    bash
Wake up the vehicle
    curl -X POST http://localhost:3000/api/vehicle/wake_up/VEHICLE_ID \
    -H "Authorization: Bearer YOUR_JWT_TOKEN"


## 📝 Available Commands

The API supports all Tesla vehicle commands, including:

- Vehicle Controls
  - Wake Up
  - Door Lock/Unlock
  - Horn & Lights
  - Trunk Control
  - Window Control
  
- Climate Controls
  - Start/Stop Climate
  - Set Temperature
  
- Charging Controls
  - Start/Stop Charging
  - Set Charge Limit
  
- Media Controls
  - Playback Control
  - Volume Control
  - Track Navigation

## 🔒 Security

- JWT-based authentication
- Secure token handling
- Rate limiting (recommended to implement)
- HTTPS required in production

## 🤖 Grok Integration

The API uses Grok AI to interpret natural language commands. The integration:

1. Processes user input through Grok
2. Interprets the intent and parameters
3. Maps to appropriate Tesla API commands
4. Executes the command with proper parameters

## 🛠️ Development

bash
Run in development mode
npm run dev
Run tests (when implemented)
npm test


## 📚 API Documentation

For detailed API documentation, see the following endpoints:

- `POST /api/auth/tesla` - Tesla authentication
- `POST /api/vehicle/command` - Natural language command processing
- `POST /api/vehicle/:command/:vehicleId` - Direct command execution

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## ⚠️ Disclaimer

This project is not officially affiliated with Tesla, Inc. or Grok AI. Use at your own risk and ensure compliance with Tesla's terms of service.

## 🙏 Acknowledgments

- Tesla Fleet API Documentation
- Grok AI Team
- Express.js Community

## 📧 Support

For support, please open an issue in the GitHub repository.

---

Made with ❤️ by Daniel Kioko