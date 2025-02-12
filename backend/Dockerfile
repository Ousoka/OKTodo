# FROM node:18-alpine

# WORKDIR /app

# COPY package*.json ./
# RUN npm ci

# COPY . .

# EXPOSE 5000

# CMD ["npm", "start"]


# Use Node.js image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY backend/package.json /app
RUN npm install

# Copy all backend files
COPY backend/ /app

# Start the application
CMD ["npm", "start"]
