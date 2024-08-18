# Node API

## Prepare

```shell
docker network create common
```

## MongoDB

cd [mongodb](./mongodb/)

```shell
docker compose up -d
```

## NodeJS

cd [node](./node/)

### Comment three lines in the Dockerfile to init

```Dockerfile
FROM node:22.6.0-alpine

WORKDIR /app

COPY src /app
# COPY src/yarn.lock /app
# RUN yarn --pure-lockfile

# CMD [ "yarn", "prod" ]

EXPOSE 3000
```

### Init and Install packages

```shell
# Run when need update version or change something in the file package.json
docker compose run --rm node yarn init
```

```shell
docker compose run --rm node yarn add express mongoose nodemon
```

### Uncomment three lines in the Dockerfile to run

```Dockerfile
FROM node:22.6.0-alpine

WORKDIR /app

COPY src /app
COPY src/yarn.lock /app
RUN yarn --pure-lockfile

CMD [ "yarn", "prod" ]

EXPOSE 3000
```

### Run

```shell
# Build image
docker compose build

# Prod
docker compose -f docker-compose.yml up

# Dev (hotfix)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```
