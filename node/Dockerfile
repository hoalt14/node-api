FROM node:18.8.0-alpine3.15

EXPOSE 3000
WORKDIR /app

ADD src/package.json src/yarn.lock /app/
RUN yarn --pure-lockfile

ADD ./src /app

CMD [ "yarn", "prod" ]
