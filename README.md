# API MEALS

*This API manages restaurant information about users, meals, orders and reviews, performs the actions of deleting, creating, modifying and consulting all the information that is managed.*


## INSTALLED LIBRARIES OR  TOOLS
##### NOTE: *Before running the tools and libraries, clone the project that is in the following path ---> https://github.com/castilloxavie/API-MEALS, keep in mind to clone the env.temolate file and rename it .env and add the variables of environment*

```sh
npm init -y
npm i express
npm i -D nodemon
docker-compose up -d
npm i env-var
npm i dotenv
npm i sequelize
npm i pg pg-hstore
npm i zod
npm i morgan
npm i cors
npm i bcrypt
npm i jsonwebtoken
npm run dev
```

### Endpoints: Users, Order, Meals, Restaurants, Reviews

#### Users
| HTTP  |             URL             |            DESCRIPTION     |
|-------|-----------------------------|----------------------------|
|GET    |   http://localhost:3000/api/v1/user/orders/ | consultation of all users, orders, meals and restaurants |
|GET    |  http://localhost:3000/api/v1/user/orders/id | query by id |
|POST   |  http://localhost:3000/api/v1/user/ | user login |
|POST   |  http://localhost:3000/api/v1/user/ | user register |
|PATCH  |  http://localhost:3000/api/v1/user/id |update user|
|DELETE |  http://localhost:3000/api/v1/user/id |delete user(user status change)|


#### Order
| HTTP  |             URL             |            DESCRIPTION     |
|-------|-----------------------------|----------------------------|
|GET    |  http://localhost:3000/api/v1/order/ | consultation of all order |
|GET    |  http://localhost:3000/api/v1/order/id | query by id |
|POST   |  http://localhost:3000/api/v1/order/ | create order |
|PATCH  |  http://localhost:3000/api/v1/order/id |update order|
|DELETE |  http://localhost:3000/api/v1/order/id |delete order(order status change)|


#### Restaurants
| HTTP  |             URL             |            DESCRIPTION     |
|-------|-----------------------------|----------------------------|
|GET    |   http://localhost:3000/api/v1/restaurant/ | consultation of all restaurants|
|GET    |  http://localhost:3000/api/v1/restaurant/id | query by id |
|POST   |  http://localhost:3000/api/v1/restaurant/ | create restaurant  |
|PATCH  |  http://localhost:3000/api/v1/restaurant/id |update restaurant|
|DELETE |  http://localhost:3000/api/v1/restaurant/id |delete restaurant(restaurant status change)|


#### Meals
| HTTP  |             URL             |            DESCRIPTION     |
|-------|-----------------------------|----------------------------|
|GET    |   http://localhost:3000/api/v1/meal/ | consultation of all meal|
|GET    |  http://localhost:3000/api/v1/meal/id | query by id |
|POST   |  http://localhost:3000/api/v1/meal/ |create meal  |
|PATCH  |  http://localhost:3000/api/v1/meal/id |update meal|
|DELETE |  http://localhost:3000/api/v1/meal/id |delete meal(meal status change)|


#### Reviews
| HTTP  |             URL             |            DESCRIPTION     |
|-------|-----------------------------|----------------------------|
|GET    |   http://localhost:3000/api/v1/review/ | consultation of all review|
|GET    |  http://localhost:3000/api/v1/review/id | query by id |
|POST   |  http://localhost:3000/api/v1/review/ | review login |
|PATCH  |  http://localhost:3000/api/v1/review/id |update review|
|DELETE |  http://localhost:3000/api/v1/review/id |delete review(review status change)|
