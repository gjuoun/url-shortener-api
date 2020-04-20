## url-shortener-api
written in Typescript, powered by Express.js and MongoDB

---

- This api server will generate a shortlink for the user.

```
For example, this link:
https://cloud.mongodb.com/v2/5dbfa31cf2a30b6a02368430#metrics/replicaSet/5e94b3fff17a7a6a171b95dd/explorer/Cat/cats/find

will become:
http://<your_domain>/jNbMY-6Vug
```

- Dockerfile is provided, please be advised that you have to the SET ENVIRONMENT VARIABLES.

- Server default port: 3000

---

### Usage:

```
Requirement: To serve in local, you need Redis installed in local/remote

1. Clone this repo
2. Set environment variable, please copy "example.env" and rename it ".env", then edit the .env file
  - example for local setup
    NODE_ENV=dev
    PORT=3000
    DOMAIN=localhost:3000
    MONGO_CONN=<your mongo connection string>

  - example for production setup
    NODE_ENV=prod
    PORT=3000
    DOMAIN=<your domain>
    MONGO_CONN=<your mongo connection string>
3. Run "npm install"
4. Run "npm start"

Done!
```

---

### Test Your API:

There are only one endpoint but you can fetch in two ways,

Use your favorite rest client

#### Generate a shortened link
```
GET http://localhost:3000/
Content-Type: application/json

{
  "originalUrl": "https://github.com/gjuoun/url-shortener-api"
}


response:
{
    "success": true,
    "shortenedUrl": "http://localhost:3000/-EU-uxDH47"
}
```

