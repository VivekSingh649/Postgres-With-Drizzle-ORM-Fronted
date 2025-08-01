# Postgres With Drizzle ORM - Fullstack CRUD App

A fullstack CRUD application using React (Vite), Drizzle ORM, PostgreSQL, and Express.js. This project demonstrates a modern, type-safe, and scalable approach to building web applications with a focus on clean architecture and developer experience.

## Features

- User management (Create, Read, Update, Delete)
- Complex nested forms with validation (React Hook Form + Yup)
- Pagination, search, and filtering
- Optimistic UI updates with React Query
- Toast notifications for user feedback
- Responsive, modern UI with custom components
- Skeleton loaders for better UX
- Error boundaries and robust error handling
- Modular folder structure for scalability

## Tech Stack

### Frontend

- **React** (with Vite for fast dev/build)
- **React Hook Form** for form state management
- **Yup** for schema-based validation
- **React Query** for data fetching, caching, and mutations
- **Axios** for HTTP requests
- **React Hot Toast** for notifications
- **Tailwind CSS** (or custom CSS) for styling
- **React Router** for routing

### Backend

- **Node.js** with **Express.js**
- **Drizzle ORM** for type-safe SQL and migrations
- **PostgreSQL** as the database
- **dotenv** for environment variable management

## Folder Structure

```
Backend/
  src/
    config/         # DB config
    controller/     # Express controllers
    drizzle/        # Drizzle schema & migrations
    helper/         # Utility functions
    middleware/     # Express middlewares
    routes/         # API routes
    validator/      # Validation logic
  drizzle.config.ts # Drizzle ORM config
  ...
Frontend/
  src/
    api/            # API calls (Axios)
    components/     # UI components
    hooks/          # Custom React hooks
    pages/          # Page components
    skeleton/       # Skeleton loaders
    validator/      # Yup schemas
    helper/         # Utility functions
    ...
  ...
```

## Getting Started

### Backend

1. Install dependencies:
   ```bash
   cd Backend
   npm install
   ```
2. Set up your `.env` file with PostgreSQL credentials.
3. Run migrations:
   ```bash
   npm run drizzle:migrate
   ```
4. Start the server:
   ```bash
   npm run dev
   ```

### Frontend

1. Install dependencies:
   ```bash
   cd Frontend
   npm install
   ```
2. Start the dev server:
   ```bash
   npm run dev
   ```

## Environment Variables

- See `.env` in the Backend folder for required variables (PostgreSQL connection, etc).

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.


