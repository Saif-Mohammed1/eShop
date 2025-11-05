# 🛍️ E-Shop - Full Stack E-Commerce Platform

A modern, full-featured e-commerce application built with Laravel (Backend) and React (Frontend), offering a seamless shopping experience with robust authentication, cart management, and admin capabilities.

[![Laravel](https://img.shields.io/badge/Laravel-10.x-red.svg)](https://laravel.com)
[![React](https://img.shields.io/badge/React-18.2-blue.svg)](https://reactjs.org)
[![PHP](https://img.shields.io/badge/PHP-8.1+-purple.svg)](https://php.net)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Running the Application](#-running-the-application)
- [API Documentation](#-api-documentation)
- [Database Schema](#-database-schema)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [License](#-license)

---

## ✨ Features

### 🛒 Shopping Features

- **Product Catalog**: Browse products with categories and detailed views
- **Product Search & Filter**: Find products quickly with advanced filtering
- **Shopping Cart**: Add, update, and remove items from cart
- **Checkout Process**: Seamless checkout experience
- **Product Ratings**: View and rate products

### 👤 User Features

- **User Authentication**: Secure registration and login
- **Email Verification**: Verify user accounts via email
- **Social Login**: Sign in with Google OAuth
- **User Dashboard**: Manage profile, orders, and preferences
- **Password Reset**: Secure password recovery

### 🔐 Admin Features

- **Admin Dashboard**: Comprehensive admin panel
- **Product Management**: Create, read, update, and delete products
- **User Management**: Manage user accounts and permissions
- **Order Management**: Track and manage customer orders

### 🎨 UI/UX Features

- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Clean and intuitive interface with Bootstrap
- **Loading States**: Smooth loading indicators and spinners
- **Icons**: Font Awesome icon integration
- **Styled Components**: CSS-in-JS for dynamic styling

### 🔧 Technical Features

- **RESTful API**: Well-structured API endpoints
- **Token-based Authentication**: Laravel Sanctum for secure API access
- **State Management**: Redux with Redux Saga for async operations
- **Persistent State**: Redux Persist for cart and user data
- **CORS Support**: Configured for cross-origin requests
- **Email Notifications**: Automated email system with Mailgun

---

## 🚀 Tech Stack

### Backend

| Technology            | Description                      |
| --------------------- | -------------------------------- |
| **Laravel 10.x**      | PHP Framework for web artisans   |
| **PHP 8.1+**          | Server-side programming language |
| **Laravel Sanctum**   | API authentication system        |
| **Laravel Passport**  | OAuth2 server implementation     |
| **Laravel Socialite** | Social authentication (Google)   |
| **MySQL**             | Relational database management   |
| **Mailgun**           | Email delivery service           |
| **Guzzle**            | HTTP client for API requests     |

### Frontend

| Technology            | Description                    |
| --------------------- | ------------------------------ |
| **React 18.2**        | JavaScript library for UI      |
| **React Router DOM**  | Client-side routing            |
| **Redux**             | State management               |
| **Redux Saga**        | Side effect management         |
| **Redux Persist**     | State persistence              |
| **Axios**             | HTTP client                    |
| **Bootstrap 5**       | CSS framework                  |
| **React Bootstrap**   | Bootstrap components for React |
| **Styled Components** | CSS-in-JS styling              |
| **Font Awesome**      | Icon library                   |
| **Reselect**          | Memoized selectors             |

### Development Tools

- **Composer** - PHP dependency manager
- **NPM** - JavaScript package manager
- **Laravel Pint** - Code style fixer
- **PHPUnit** - PHP testing framework
- **Jest** - JavaScript testing framework
- **Laravel Sail** - Docker development environment

---

## 📁 Project Structure

```
Eshop/
├── Backend/                    # Laravel API Backend
│   ├── app/
│   │   ├── Console/           # Artisan commands
│   │   ├── Exceptions/        # Exception handlers
│   │   ├── Http/
│   │   │   ├── Controllers/   # API controllers
│   │   │   ├── Middleware/    # HTTP middleware
│   │   │   └── Requests/      # Form request validation
│   │   ├── Models/            # Eloquent models
│   │   │   ├── User.php
│   │   │   ├── Product.php
│   │   │   ├── Cart.php
│   │   │   └── MainPage.php
│   │   ├── Notifications/     # Email notifications
│   │   └── Providers/         # Service providers
│   ├── config/                # Configuration files
│   ├── database/
│   │   ├── factories/         # Model factories
│   │   ├── migrations/        # Database migrations
│   │   └── seeders/           # Database seeders
│   ├── routes/
│   │   ├── api.php           # API routes
│   │   └── web.php           # Web routes
│   ├── storage/              # File storage
│   ├── tests/                # PHPUnit tests
│   └── composer.json         # PHP dependencies
│
└── Frontend/                  # React SPA Frontend
    ├── public/
    │   ├── index.html        # HTML template
    │   └── manifest.json     # PWA manifest
    ├── src/
    │   ├── components/       # React components
    │   │   ├── cartIcon/
    │   │   ├── categories-preview/
    │   │   ├── category/
    │   │   ├── checkoutitems/
    │   │   ├── dashboard-items/
    │   │   ├── home-items/
    │   │   ├── product-card/
    │   │   ├── shop/
    │   │   ├── signIn-form/
    │   │   ├── signUp-form/
    │   │   └── spinner/
    │   ├── store/            # Redux store setup
    │   ├── utils/            # Utility functions
    │   ├── assets/           # Images and static files
    │   ├── App.js            # Root component
    │   └── index.js          # Entry point
    └── package.json          # JavaScript dependencies
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

### Backend Requirements

- **PHP** >= 8.1
- **Composer** >= 2.0
- **MySQL** >= 8.0 or **MariaDB** >= 10.3
- **Apache** or **Nginx** web server

### Frontend Requirements

- **Node.js** >= 16.x
- **npm** >= 8.x or **yarn** >= 1.22

### Optional

- **Docker** (for Laravel Sail)
- **Git** (for version control)

---

## 🔧 Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Eshop
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd Backend

# Install PHP dependencies
composer install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate

# Create database and update .env file with your database credentials
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3306
# DB_DATABASE=eshop
# DB_USERNAME=root
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# (Optional) Seed the database with sample data
php artisan db:seed

# Create symbolic link for storage
php artisan storage:link

# Install Laravel Passport (if using)
php artisan passport:install
```

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from project root)
cd Frontend

# Install JavaScript dependencies
npm install

# Or using yarn
yarn install
```

---

## ⚙️ Configuration

### Backend Configuration

Edit the `.env` file in the `Backend` directory:

```env
# Application
APP_NAME="E-Shop"
APP_ENV=local
APP_KEY=base64:YOUR_APP_KEY
APP_DEBUG=true
APP_URL=http://localhost:8000

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=eshop
DB_USERNAME=root
DB_PASSWORD=your_password

# Sanctum
SANCTUM_STATEFUL_DOMAINS=localhost:3000,127.0.0.1:3000

# CORS
FRONTEND_URL=http://localhost:3000

# Mail Configuration (Mailgun)
MAIL_MAILER=mailgun
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=your_mailgun_username
MAIL_PASSWORD=your_mailgun_password
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@eshop.com
MAIL_FROM_NAME="${APP_NAME}"

MAILGUN_DOMAIN=your_mailgun_domain
MAILGUN_SECRET=your_mailgun_secret

# Google OAuth
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=http://localhost:8000/api/callback/google

# Session
SESSION_DRIVER=database
SESSION_LIFETIME=120
```

### Frontend Configuration

Create a `.env` file in the `Frontend` directory:

```env
REACT_APP_API_URL=http://localhost:8000/api
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id
```

---

## 🏃 Running the Application

### Development Mode

#### Start Backend Server

```bash
cd Backend

# Using PHP built-in server
php artisan serve

# Or using Laravel Sail (Docker)
./vendor/bin/sail up

# Backend will run on http://localhost:8000
```

#### Start Frontend Development Server

```bash
cd Frontend

# Start React development server
npm start

# Or using yarn
yarn start

# Frontend will run on http://localhost:3000
```

### Production Build

#### Backend Deployment

```bash
cd Backend

# Optimize configuration
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set proper permissions
chmod -R 755 storage bootstrap/cache
```

#### Frontend Build

```bash
cd Frontend

# Create production build
npm run build

# Or using yarn
yarn build

# Build files will be in the 'build' directory
```

---

## 📚 API Documentation

### Base URL

```
http://localhost:8000/api
```

### Authentication Endpoints

| Method | Endpoint  | Description            | Auth Required |
| ------ | --------- | ---------------------- | ------------- |
| POST   | `/signup` | Register new user      | No            |
| POST   | `/login`  | Login user             | No            |
| POST   | `/logout` | Logout user            | Yes           |
| GET    | `/user`   | Get authenticated user | Yes           |

### Product Endpoints

| Method | Endpoint         | Description        | Auth Required |
| ------ | ---------------- | ------------------ | ------------- |
| GET    | `/products`      | Get all products   | No            |
| GET    | `/products/{id}` | Get single product | No            |
| POST   | `/products`      | Create new product | Yes (Admin)   |
| PUT    | `/products/{id}` | Update product     | Yes (Admin)   |
| DELETE | `/products/{id}` | Delete product     | Yes (Admin)   |

### Cart Endpoints

| Method | Endpoint     | Description           | Auth Required |
| ------ | ------------ | --------------------- | ------------- |
| GET    | `/cart`      | Get user cart items   | Yes           |
| POST   | `/cart`      | Add item to cart      | Yes           |
| PUT    | `/cart/{id}` | Update cart item      | Yes           |
| DELETE | `/cart/{id}` | Remove item from cart | Yes           |

### User Dashboard

| Method | Endpoint           | Description        | Auth Required |
| ------ | ------------------ | ------------------ | ------------- |
| GET    | `/users/dashboard` | Get dashboard data | Yes           |

### Main Page

| Method | Endpoint | Description       | Auth Required |
| ------ | -------- | ----------------- | ------------- |
| GET    | `/home`  | Get homepage data | No            |

### Social Authentication

| Method | Endpoint           | Description           |
| ------ | ------------------ | --------------------- |
| GET    | `/auth/google`     | Initiate Google OAuth |
| GET    | `/callback/google` | Google OAuth callback |

### Email Verification

| Method | Endpoint                    | Description               | Auth Required |
| ------ | --------------------------- | ------------------------- | ------------- |
| GET    | `/email/verify`             | Email verification notice | Yes           |
| GET    | `/email/verify/{id}/{hash}` | Verify email address      | Yes           |

### Request Headers

```json
{
  "Content-Type": "application/json",
  "Accept": "application/json",
  "Authorization": "Bearer {token}"
}
```

### Response Format

#### Success Response

```json
{
  "success": true,
  "data": {},
  "message": "Success message"
}
```

#### Error Response

```json
{
  "success": false,
  "message": "Error message",
  "errors": {}
}
```

---

## 🗄️ Database Schema

### Users Table

```sql
- id (bigint, primary key)
- name (varchar)
- email (varchar, unique)
- email_verified_at (timestamp, nullable)
- password (varchar)
- admin (boolean, default: false)
- social_id (varchar, nullable)
- social_type (varchar, nullable)
- remember_token (varchar, nullable)
- created_at (timestamp)
- updated_at (timestamp)
```

### Products Table

```sql
- id (bigint, primary key)
- title (varchar)
- name (varchar)
- imageUrl (varchar)
- imageFile (varchar, nullable)
- price (decimal)
- rating (decimal, nullable)
- created_at (timestamp)
- updated_at (timestamp)
```

### Carts Table

```sql
- id (bigint, primary key)
- user_id (bigint, foreign key)
- product_id (bigint, foreign key)
- quantity (integer)
- created_at (timestamp)
- updated_at (timestamp)
```

### Main Pages Table

```sql
- id (bigint, primary key)
- title (varchar)
- content (text)
- created_at (timestamp)
- updated_at (timestamp)
```

---

## 🧪 Testing

### Backend Tests

```bash
cd Backend

# Run all tests
php artisan test

# Run specific test suite
php artisan test --testsuite=Feature
php artisan test --testsuite=Unit

# Run with coverage
php artisan test --coverage
```

### Frontend Tests

```bash
cd Frontend

# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test file
npm test -- CartIcon.test.js
```

---

## 🚀 Deployment

### Backend Deployment

1. **Server Requirements**

   - PHP >= 8.1
   - MySQL/MariaDB
   - Composer
   - Apache/Nginx

2. **Deployment Steps**

```bash
# Clone repository on server
git clone <repository-url>
cd Eshop/Backend

# Install dependencies (without dev dependencies)
composer install --no-dev --optimize-autoloader

# Set up environment
cp .env.example .env
# Edit .env with production settings

# Generate key
php artisan key:generate

# Run migrations
php artisan migrate --force

# Optimize
php artisan config:cache
php artisan route:cache
php artisan view:cache

# Set permissions
chmod -R 755 storage bootstrap/cache
chown -R www-data:www-data storage bootstrap/cache
```

3. **Web Server Configuration**

**Apache (.htaccess)**

```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteRule ^(.*)$ public/$1 [L]
</IfModule>
```

**Nginx**

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/Backend/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### Frontend Deployment

1. **Build the Application**

```bash
cd Frontend

# Create production build
npm run build
```

2. **Deploy Options**

**Option 1: Static Hosting (Netlify, Vercel)**

- Connect your Git repository
- Set build command: `npm run build`
- Set publish directory: `build`
- Add environment variables

**Option 2: Nginx/Apache**

```bash
# Copy build files to web server
cp -r build/* /var/www/html/

# Nginx configuration
server {
    listen 80;
    server_name your-frontend-domain.com;
    root /var/www/html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

### Environment Variables (Production)

Update your `.env` files with production URLs:

**Backend**

```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://api.your-domain.com
FRONTEND_URL=https://your-domain.com
SANCTUM_STATEFUL_DOMAINS=your-domain.com
```

**Frontend**

```env
REACT_APP_API_URL=https://api.your-domain.com/api
```

---

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- **Backend**: Follow PSR-12 coding standards
  ```bash
  ./vendor/bin/pint
  ```
- **Frontend**: Follow Airbnb JavaScript Style Guide
  ```bash
  npm run lint
  ```

### Commit Messages

Follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
feat: add new product filter
fix: resolve cart calculation bug
docs: update API documentation
style: format code with Pint
refactor: optimize product queries
test: add cart component tests
```

---

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

- **Your Name** - _Initial work_

---

## 🙏 Acknowledgments

- Laravel community for the amazing framework
- React team for the powerful UI library
- All contributors who have helped this project grow

---

## 📞 Support

For support, email support@eshop.com or open an issue in the repository.

---

## 🔗 Links

- [Live Demo](#) - Coming soon
- [Documentation](#) - Coming soon
- [Bug Reports](https://github.com/your-repo/issues)
- [Feature Requests](https://github.com/your-repo/issues)

---

## 📸 Screenshots

### Home Page

![Home Page](screenshots/home.png)

### Product Catalog

![Products](screenshots/products.png)

### Shopping Cart

![Cart](screenshots/cart.png)

### User Dashboard

![Dashboard](screenshots/dashboard.png)

### Admin Panel

![Admin](screenshots/admin.png)

---

## 🗺️ Roadmap

- [ ] Payment integration (Stripe/PayPal)
- [ ] Order tracking system
- [ ] Product reviews and ratings
- [ ] Wishlist feature
- [ ] Product recommendations
- [ ] Multi-language support
- [ ] Progressive Web App (PWA)
- [ ] Real-time notifications
- [ ] Advanced analytics dashboard
- [ ] Inventory management
- [ ] Coupon/discount system
- [ ] Shipping integration

---

## ❓ FAQ

**Q: How do I reset my admin password?**
A: Use `php artisan tinker` and run user update commands or reset via database.

**Q: Can I use this for production?**
A: Yes, but ensure you properly configure security settings and use HTTPS.

**Q: How do I add new payment methods?**
A: Integrate payment gateways in the checkout controller and add corresponding frontend components.

**Q: Is Docker supported?**
A: Yes, Laravel Sail provides Docker support for the backend.

---

Made with ❤️ by Saif Mohammed
