FROM node:10

WORKDIR /app

COPY . /app

RUN npm i -g yarn \
  && yarn

CMD yarn cron-start
