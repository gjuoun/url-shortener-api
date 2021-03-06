## Url Shortener API

> Shorten a long link into a short one, as simple as it is

[Github repo](https://github.com/gjuoun/url-shortener-api)

[API documentation](https://stoplight.io/p/docs/gh/gjuoun/url-shortener-api)

## Install

    > git clone https://github.com/gjuoun/url-shortener-api

## Usage

Copy `.env.example` as `.env`, and provide mongoDB connection string as `MONGO_CONN=<your_mongo_connection_string>` 

    > npm run build

    > npm start

## Docker Usage

    > docker image build -t url-shortener-api:1.0 .

    > docker run -d \
      -p 3000:3000 \
      -e DOMAIN=localhost:3000 \
      -e MONGO_CONN=<Your Mongo connection string>
      url-shortener-api:1.0

## Roadmap

- [x] Generate Url at local development environment
- [x] Dockerfile
- [x] MongoDb connection
- [ ] Security features
