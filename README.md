# Tumbs up Store

An awesome store

## Description

All system is composed by a frontend made with Angular, a backend made with Nestjs and a Mongo DB running on docker

## Running Backend App

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

## Running Frontend app

1. install

```bash
# frontend
$ cd clothes-store
$ npm install
```

2. Start the frontend

```bash
# development
$ ng s

```

## Try it!

FronEnd is available at:
https://668358de45573bdaf90fca45--nimble-syrniki-5bb972.netlify.app/#/store/home

Create a user account or

Log in as user to access to store

```
# User credentials
email: use@store.com
password: user123
```

Log in as admin to access to dashboard

```
# Admin credentials
email: admin@store.com
password: admin123
```
