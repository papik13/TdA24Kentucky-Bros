# Step 1: Choose the base image with the Node.js version that matches your application requirements
FROM node:lts-alpine

# Step 2: Set the working directory in the container
WORKDIR /usr/src/app

# Step 3: Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the rest of the application source code
COPY . .

# Step 6: Build the application for production
RUN npm run build

# Step 7: Define the command to run the application
CMD [ "npm", "run", "start" ]

# Step 8: Expose the port that Nuxt.js will run on
EXPOSE 3000