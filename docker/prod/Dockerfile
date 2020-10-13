FROM node:10-alpine

WORKDIR /app

COPY . /app

RUN yarn install \
  && yarn cache clean

CMD node /app/dist/bin/worker.js