FROM node:14.17.5-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
EXPOSE 4200
CMD ["yarn", "run", "start"]