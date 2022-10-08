FROM node:lts-alpine3.16

WORKDIR /home

COPy ./ ./
RUN yarn install

CMD yarn start