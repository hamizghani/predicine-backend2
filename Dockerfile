# Base image
FROM node:22-alpine

# Enable pnpm
RUN corepack enable && corepack prepare pnpm@10.6.2 --activate

# Set working directory
WORKDIR /usr/src/app

# Copy only the package manager files first (for better caching)
COPY package.json pnpm-lock.yaml ./

# Install dependencies (including dev dependencies for build)
RUN pnpm install --frozen-lockfile


# Copy the rest of the code
COPY . .

RUN npx prisma generate

# Build the TypeScript project
RUN pnpm run build

# Expose the port used by your Express app
EXPOSE 3000

# Set the start command (from your package.json)
CMD ["pnpm", "run", "start"]