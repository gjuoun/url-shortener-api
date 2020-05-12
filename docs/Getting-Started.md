# Getting Started

> Shorten a long link into a short one, as simple as it is

[Github repo](https://github.com/gjuoun/url-shortener-api)

[API documentation](https://stoplight.io/p/docs/gh/gjuoun/url-shortener-api)

## Install

    > git clone https://github.com/gjuoun/url-shortener-api

## Usage

    > npm run build

    > npm start

## Docker Usage

    > docker image build -t url-shortener-api:1.0 .

    > docker run -d \
      -p 3000:3000 \
      -e DOMAIN=localhost:3000 \
      -e MONGO_CONN=<Your Mongo connection string>
      url-shortener-api:1.0

