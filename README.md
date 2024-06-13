# Tumbs up Store

An awesome store

## Description

All system is composed by a frontend made with Angular, a backend made with Nestjs and a Mongo DB running on docker

## Running the app

1. Run the mongo database using docker

```bash
# development
$ docker-compose up -d
```

2. configure the enviroment variables on .env file

3. install

```bash
# backend
$ cd store-backend
$ npm install
```

3. seed users, categories and product information

```bash
$ npm run build
$ npm run seed
```

4. start the backend

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

```

La URL del backend es: http://localhost:3000/api
