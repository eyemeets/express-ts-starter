# Express-TS-Starter

**Express-TS-Starter** is a TypeScript-based Express starter template that I use for starting projects, new features auto file routing and ESLint integration. This project is ideal for me and others who want to build modular and scalable Express applications quickly.

## Features
- **TypeScript**: Provides full type safety and modern JavaScript features.
- **Auto File-Based Routing**: Automatically maps route files inside the `src/routes` directory to Express routes.
- **ESLint**: Lint your TypeScript code using preconfigured ESLint settings.
- **Hot Reloading**: Utilizes `nodemon` and `ts-node` for automatic server restarts during development.
- **Vitest**: Unit testing framework with fast execution and TypeScript support.
- **Vercel Integration**: Ready for quick and easy deployment using Vercel.
- **ISC License**: The project is licensed under ISC, making it highly permissive.

## Getting Started

### Prerequisites

- Node.js (v16+)
- `pnpm` as the package manager

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/eyemeets/express-ts-starter.git
   cd express-ts-starter
   ```

2. Install dependencies:
  ```bash
  pnpm install
  ```

3. Run the development server:
  ```bash
  pnpm dev
  ```

4. Build the project:
  ```bash
  pnpm build
  ```

### Auto File-Based Routing

This project uses `express-file-routing` to map files directly to routes. For example:

- **`src/routes/index.ts`** handles `GET /`
- **`src/routes/dynamic/[id].ts`** handles `GET /dynamic/:id`

To add a new route, simply add a new file to `src/routes/` and export route handlers like `get`, `post`, etc.

### Example: Add a New Route

1. Create a new route file:

   ```bash
   touch src/routes/hello.ts
   ````

2. Add a route handler:

  ```ts
  import { Request, Response } from 'express';

  export const get = (req: Request, res: Response) => {
    res.json({ message: 'Hello, World!' });
  };
  ```

3. Access the new route at GET /hello.

## Testing

This project uses **Vitest** for unit testing.

### Running Tests

To run tests, use the following command:

  ```bash
  pnpm test
  ```

Vitest is configured with TypeScript support and uses `ts-node/esm` to handle TypeScript files during tests. The tests are located in the `tests/` directory, and Vitest will automatically run all the test files.

### Example Test
Here’s an example of a basic test for the `GET /` route:

  ```ts
  import request from 'supertest'
  import { describe, it, expect } from 'vitest'
  import app from '~/app.ts' // Use .ts extension explicitly

  describe('GET /', () => {
    it('should return hello world', async () => {
      const res = await request(app).get('/')
      expect(res.status).toBe(200)
      expect(res.body).toEqual({   hello: 'world' }) // Update to match the actual response
    })
  })
  ```

## Deploying to Vercel

This project is already set up for deployment using [Vercel](https://vercel.com). The application has been deployed and is live at:

- [Main deployment link](https://express-ts-starter-ofgdyc0zf-daniel-hendricks-projects.vercel.app/)
- [Dynamic route example](https://express-ts-starter-ofgdyc0zf-daniel-hendricks-projects.vercel.app/dynamic/insert-any-id)

### Vercel Commands

Login to Vercel first
  ```bash
  pnpm v:login
  ```

To run the project locally with Vercel for development:

  ```bash
  pnpm dev:ship
  ```

To deploy the project to production:
```bash
pnpm ship
```
