# use docker to deploy node api 

> ref: https://kipalog.com/posts/Dev-hien-dai-phan-2--Chay-ung-dung-tren----localhost

> ref: https://kipalog.com/posts/Tu-phat-trien-toi-trien-khai-phan-1--Backend--NodeJS--API

* login docker hub
  * docker login
  * username: **tofuer**
  * password:

* image: **tofuer/nodejs-yarn:v1.0.0**

* clone source
  * git clone git@github.com:tofu14/node_api.git
  * cd node_api
  * docker-compose run --rm nodejs-yarn yarn install
  * **if need build image**: docker build -t tofuer/nodejs-yarn:v1.0.0 .

## start environment
* production
  * docker-compose up

* development **(hot reloading)**
  * docker-compose run --rm nodejs-yarn yarn add nodemon --dev
  * docker-compose -f docker-compose.yml -f docker-compose.dev.yml up

## notes
* tag: docker tag node-api_node-api-app:latest tofuer/nodejs-yarn:v1.0.0
* push: docker push tofuer/nodejs-yarn:v1.0.0
* pull: docker pull tofuer/nodejs-yarn:v1.0.0
