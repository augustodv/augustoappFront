FROM node:14.17.5-alpine as build
WORKDIR /usr/src/app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build
# Use official nginx image as the base image
FROM nginx:latest
# Copy the build output to replace the default nginx contents.
# be sure to replace app-name with name of your app
COPY --from=build /usr/src/app/dist/augustoappFront /usr/share/nginx/html
# Expose port 80
EXPOSE 80
