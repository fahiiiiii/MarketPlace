# MarketPlace
A robust e-commerce platform that enables product management and seamless shopping experiences.

## Overview
MarketPlace is built to support two distinct user roles:
- Administrators who manage products and inventory
- Customers who browse and purchase products
## Setup Instructions
1. Clone the repository:
```bash
git clone https://github.com/fahiiiiii/MarketPlace.git
cd MarketPlace
```

2. Install dependencies:
```bash
npm install
```

3. Install development dependencies:
```bash
npm install --save-dev nodemon
```

4. Configure environment variables:
   - Create a `.env` file in the root directory
   - Copy the contents from `dev.env` template
   - Modify the values as needed for your setup

5. Start the application:
```bash
# Development with nodemon
npm run dev
# Production
npm start
```

6. Update your package.json scripts:
```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

## Authentication
The platform implements JWT-based authentication with a dual-token system for enhanced security:

### Token Types
- **Access Token**: Short-lived token used for API authentication
  - Generated during login and registration
  - Required for all protected route access
  - Included in request Authorization header
  
- **Refresh Token**: Long-lived token for maintaining sessions
  - Generated alongside access token
  - Used to obtain new access tokens
  - Helps maintain persistent authentication

### Token Generation Endpoints
```
POST /api/users/register    # Generates initial access & refresh tokens
POST /api/users/login       # Generates new access & refresh tokens
POST /api/users/refresh     # Generates new access token using refresh token
```

### Protected Routes
Access tokens are required for:
- Product Management (Admin only)
  - Creating products
  - Updating product details
  - Removing products
- Order Management
  - Creating orders
  - Updating order status
  - Accessing order details
- User Profile
  - Viewing profile information
  - Updating user details

## Core Features
### Administrator Features
- Product Management
  - Create new products with detailed information
  - Update existing product details and pricing
  - Remove products from the marketplace
  - Manage product inventory levels
- Order Management
  - View and process customer orders
  - Update order status
  - Track delivery progress

### Customer Features
- Product Browsing
  - View all available products
  - Search and filter products
  - Access detailed product information
- Shopping Experience
  - Add products to cart
  - Complete purchases
  - Track order status

## Technical Details
### API Endpoints
Products:
```
POST   /api/products          # Create product
GET    /api/products          # List products (admin)
GET    /api/products/all      # List products (customer)
PUT    /api/products/:id      # Update product
DELETE /api/products/:id      # Remove product
```

Orders:
```
POST   /api/orders           # Create order
GET    /api/orders/:id       # Get order details
PUT    /api/orders/:id       # Update order
DELETE /api/orders/:id       # Cancel order
```

Users:
```
POST   /api/users/register   # Create account
POST   /api/users/login      # Authentication
GET    /api/users/profile    # Get user details
PUT    /api/users            # Update user information
```

### Project Structure
```
MarketPlace/
├── config/
├── middleware/
├── models/
├── routes/
├── services/
└── utils/
```


## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Submit a pull request

## License
MIT License














