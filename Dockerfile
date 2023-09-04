FROM node:14.16.0-alpine3.13

RUN addgroup app && adduser -S -G app app

WORKDIR /project
# The backend part
COPY package*.json ./
RUN npm install
COPY /api ./api
RUN npm run build

# The frontend React.js part:
COPY /app ./app
WORKDIR /project/app
RUN npm run build

WORKDIR /project
EXPOSE 5001

USER app

CMD ["npm", "start"]