FROM node:16-alpine

WORKDIR /usr/src/app/frontend
COPY .en[v] ./
COPY ./package*.json ./
RUN yarn install

COPY . .

RUN chown -R node:node .
USER node

EXPOSE 3000
CMD ["yarn", "start"]