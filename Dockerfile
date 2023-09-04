FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

# Main project folder:
WORKDIR /project

# The backend part
COPY package*.json ./
RUN npm install
COPY /api ./api
RUN npm run docker_build

# The frontend React.js part:
COPY /app ./app
WORKDIR /project/app
RUN npm install
RUN npm run build

WORKDIR /project
EXPOSE 5000

USER app

CMD ["npm", "start"]