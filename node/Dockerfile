FROM node:12.18.4-alpine3.12

EXPOSE 3000
WORKDIR /app

ADD src/package.json src/yarn.lock /app/
RUN yarn --pure-lockfile

ADD ./src /app

CMD [ "yarn", "prod" ]