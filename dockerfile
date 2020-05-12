FROM node:alpine
WORKDIR /home/gjuoun/url-shortener-api
COPY . .
RUN npm install
RUN npm run build

ENV NODE_ENV=production
ENV PORT=3000
ENV DOMAIN=localhost:3000
ENV MONGO_CONN=<mongo_connection_string>

EXPOSE 3000

CMD ["node", "./dist/app.js"]
