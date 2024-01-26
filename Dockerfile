# Dockerfile

# Using the official Node.js 16 image as a base
FROM node:16-alpine

# Setting the working directory in the container
WORKDIR /app

# Copying package.json and package-lock.json to the working directory
COPY package*.json ./

# Installing the project dependencies
RUN npm install

# Copying the rest of the application code to the working directory
COPY . .

# Exposing port 8080
EXPOSE 8080

# Specifing the command to run on container start
CMD ["node", "server.js"]
