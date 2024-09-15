FROM node:22.8.0-alpine

WORKDIR /app

COPY src /app
COPY src/yarn.lock /app
RUN yarn --pure-lockfile

CMD [ "yarn", "prod" ]

EXPOSE 3000
