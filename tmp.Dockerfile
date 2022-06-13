FROM node:16.13.0 as base

WORKDIR /usr/src/app

COPY package.json ./

COPY  .env ./                           

RUN npm i

RUN rm -f package.json


    