# Use an official Node.js runtime as a base image
FROM node:18

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy your application source code to the container
COPY . .

# Expose the port your Express.js app will run on
EXPOSE 3000

# Define the command to run your Express.js application
CMD [ "npm", "run" , "start"]
