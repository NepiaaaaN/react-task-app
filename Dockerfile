FROM node:lts-alpine3.16

WORKDIR /home

COPY ./ ./
RUN yarn install

CMD yarn start