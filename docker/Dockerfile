FROM node:14
WORKDIR /dev/app
COPY ../ .
RUN npm install

EXPOSE 3000
EXPOSE 5432
EXPOSE 6379

ENTRYPOINT ["npm","run", "start"]