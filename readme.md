## Keyzone backend

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Arifulislam5577/keyzone-backend.git
   cd keyzone-backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure your environment variables. Example:
   ```env
   NODE_ENV = DEVELOPMENT
   DATABASE_URL = YOUR_DATABASE_URL
   PORT = 5000
   CLOUD_NAME=CLOUDINARY_CLOUD_NAME
   CLOUD_API_KEY=CLOUDINARY_CLOUD_API_KEY
   CLOUD_API_SECRET=CLOUDINARY_CLOUD_API_KEY
   ```

## Scripts

### Build

Compile the TypeScript code to JavaScript:

```bash
npm run build
```

### Development

Run the application in development mode with hot-reloading:

```bash
npm run dev
```

### Linting

Lint the TypeScript files:

```bash
npm run lint
```

Automatically fix linting issues:

```bash
npm run lint --fix
```

### Formatting

Format the TypeScript files:

```bash
npm run format
```

---
