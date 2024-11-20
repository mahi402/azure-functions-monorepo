# syntax=docker/dockerfile:1

# Build Node.js app
# ------------------------------------
  FROM node:20-alpine AS build
  WORKDIR /app
  COPY package.json .
  COPY . .
  RUN npm ci --cache /tmp/empty-cache
  RUN npm run build --workspace=src/api
  
  # Run Node.js app
  # ------------------------------------
  FROM node:20-alpine
  ENV NODE_ENV=production
  WORKDIR /app
  COPY --from=build /app/ .
  EXPOSE 3000
  CMD [ "npm", "start", "--workspace=src/api" ]