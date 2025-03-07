# Ticketing System Backend

A robust backend system for managing tickets and support requests, built with Node.js, Express, and TypeScript.

## Features

- RESTful API architecture
- JWT-based authentication
- MongoDB database integration
- TypeScript for type safety
- Security features with Helmet middleware
- CORS support
- Request logging with Morgan

## Prerequisites

- Node.js (v16 or higher recommended)
- pnpm (v10.5.2 or higher)
- MongoDB instance (local or cloud)

## Environment Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd ticketing-system-backend
```

2. Install dependencies:

```bash
pnpm install
```

3. Configure environment variables:
   - Copy the `.env.example` file to `.env`
   - Fill in the required environment variables:
     - `MONGO_URI`: Your MongoDB connection string
     - `JWT_SECRET`: Secret key for JWT token generation

```bash
cp .env.example .env
```

## Development

To run the project in development mode:

```bash
pnpm dev
```

## Scripts

- `pnpm dev` - Run the development server with hot reload
- `pnpm build` - Compile TypeScript code to JavaScript
- `pnpm start` - Run the production server
- `pnpm lint` - Run ESLint to check code quality
- `pnpm clean` - Remove the dist directory
- `pnpm test` - Run test suite (when tests are added)

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet middleware
- **Logging**: Morgan
- **Package Manager**: pnpm

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.
