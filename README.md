# Node API

`git clone git@github.com:hoalt14/node-api.git`

## MongoDB

- cd mongodb
- mkdir data
- docker-compose up

## NodeJS

- cd node
- docker-compose run --rm yarn init
- docker-compose run --rm yarn add express mongoose nodemon

### Build image for product environment

- cd node
- docker build -t node-prod .

### Run

- docker-compose -f docker-compose.yml up
- docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
