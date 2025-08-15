# Use an official Node runtime as a parent image
FROM node:22.11.0

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY package*.json ./

# Install dependencies
RUN npm install

COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run npm run dev when the container launches
CMD ["npm", "run", "dev"]
