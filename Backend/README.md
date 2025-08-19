# BookStore Backend

## Environment Variables Setup

This backend uses environment variables for configuration. Create a `.env` file in the root of the Backend directory with the following variables:

### Required Environment Variables

```bash
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGODB_URI=mongodb://localhost:27017/bookStore

# JWT Configuration (for future authentication)
JWT_SECRET=your_super_secret_jwt_key_here
JWT_EXPIRES_IN=7d

# CORS Configuration (if needed)
CORS_ORIGIN=http://localhost:3000
```

### How to Create .env File

1. Copy the `env.example` file and rename it to `.env`
2. Update the values according to your environment
3. **Never commit the `.env` file to version control**

### Environment Variables Explained

- **PORT**: The port on which the server will run (default: 5000)
- **NODE_ENV**: Environment mode (development, staging, production)
- **MONGODB_URI**: MongoDB connection string
- **JWT_SECRET**: Secret key for JWT token signing (change this in production!)
- **JWT_EXPIRES_IN**: JWT token expiration time
- **CORS_ORIGIN**: Allowed origin for CORS requests

### Security Notes

- Keep your `.env` file secure and never expose it publicly
- Use strong, unique values for secrets in production
- Consider using different values for different environments

## Installation

```bash
npm install
```

## Running the Server

```bash
npm start
```

The server will start on the port specified in your `.env` file or default to port 5000.
