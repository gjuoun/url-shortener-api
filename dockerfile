FROM node:alpine
WORKDIR /home/gjuoun/app
COPY package.json .
RUN npm install
ENV NODE_ENV=prod
ENV PORT=3000
ENV DOMAIN=<domain>
ENV MONGO_CONN=<mongo_connection_string>
EXPOSE 3000
CMD ["node", "app.js"]
COPY ./dist/ .