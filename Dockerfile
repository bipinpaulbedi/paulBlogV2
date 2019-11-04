FROM node:current-alpine
RUN apk add --no-cache python make g++
RUN npm install --global gatsby-cli yarn
WORKDIR /app
COPY ./package.json .
RUN yarn install && yarn cache clean
COPY . .
CMD ["yarn", "develop", "-H", "0.0.0.0" ]