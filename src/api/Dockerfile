# syntax=docker/dockerfile:1

# Build Node.js app
# ------------------------------------
  FROM node:20-alpine as build
  WORKDIR /app
  COPY . .
  COPY ../../package.json ./package.json
  RUN npm install
  RUN npm run build
  CMD [ "npm","start","--workspace=src/api" ]