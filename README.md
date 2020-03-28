# adonis-js-saas
# Running
## Back-end
- Setup your postgres and redis instances. You can use docker:
```
docker run --name postgresadonissaas -e POSTGRES_DB=adonissaas -e POSTGRES_PASSWORD=docker -p 5432:5432 -d -t postgres:11
docker run --name redisadonissaas -p 6379:6379 -d -t redis:alpine
```
- Create an `.env` file with your configurations. Use `.env.example` as a example.
- Install dependencies and prepare the database:
```
npm install
adonis migration:run
adonis seed
```
- Start the e-mail queue and back-end.
```
npm run queue
npm run dev
```
Back-end runs at port 3333.
## Front-end
- Edit `src/services/api.js` and add you back-end URL:
```
import axios from 'axios';
import store from '~/store';

const api = axios.create({
  baseURL: 'http://localhost:3333/',
});

...
```
- Install dependencies and run:
 ```
 yarn
 yarn start
 ```
 Front-end runs at port 3000.
 You can login with email "user@example.com" and password "123456".
 
