# Node API

`gh repo clone hoalt14/node-api`

- docker network create backend
- cd node-api/

## MongoDB

- cd mongodb/
- mkdir data
- docker-compose up

## NodeJS

- cd node/
- vim Dockerfile -> comment three line

```Dockerfile
FROM node:12.18.4-alpine3.12

EXPOSE 3000
WORKDIR /app

#ADD src/package.json src/yarn.lock /app/
#RUN yarn --pure-lockfile

ADD ./src /app

#CMD [ "yarn", "prod" ]
```

- docker-compose run --rm node yarn init -> **`run if need build file package.json again`**
- docker-compose run --rm node yarn add express mongoose nodemon

### Build image for product environment

- cd node/
- vim Dockerfile -> uncomment
- docker build -t node-prod .

### Run

- docker-compose build
- docker-compose -f docker-compose.yml up
- docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
