FROM node:10

WORKDIR /app

COPY . /app

RUN yarn install \
  && yarn cache clean

CMD node /app/dist/index.js
