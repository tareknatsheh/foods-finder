FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY /api ./
COPY /app ./client
RUN npm run build

EXPOSE 5001


USER app

CMD ["npm", "start"]