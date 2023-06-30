FROM node:16-alpine

WORKDIR /usr/src/app/server
COPY .en[v] ./
COPY ./package*.json ./
RUN yarn install

COPY . .

RUN chown -R node:node .
USER node

EXPOSE 3001
RUN yarn build
CMD [ "yarn", "start" ]