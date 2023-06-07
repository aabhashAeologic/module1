FROM node:18
WORKDIR /app2

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "npm","start" ]