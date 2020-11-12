# use docker to deploy node api 

> ref: https://kipalog.com/posts/Dev-hien-dai-phan-2--Chay-ung-dung-tren----localhost
> ref: https://kipalog.com/posts/Tu-phat-trien-toi-trien-khai-phan-1--Backend--NodeJS--API

- login docker hub
docker login
username: tofuer
password:

- image: tofuer/nodejs-yarn:v1.0.0

- clone source
git clone git@github.com:tofu14/node_api.git
cd node_api

- product env
docker-compose run --rm nodejs-yarn yarn install
docker-compose up

- development env (hot reloading)
docker-compose run --rm nodejs-yarn yarn install
docker-compose run --rm nodejs-yarn yarn add nodemon --dev
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
