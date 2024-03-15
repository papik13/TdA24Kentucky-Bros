# Backend Dockerfile
FROM node:lts-alpine AS backend
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
