# FROM node:14-alpine AS development
# ENV NODE_ENV development
FROM nginx:1.19.0
COPY build /usr/share/nginx/html
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm install
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Start the app
# CMD [ "npm", "start" ]

CMD ["nginx", "-g", "daemon off;"]