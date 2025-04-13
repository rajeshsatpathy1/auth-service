<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Authentication and Authorization

This project will explore various authentication and authorization strategies using [Passport.js](http://www.passportjs.org/). It will demonstrate how to implement strategies such as local authentication, JWT-based authentication, OAuth, and more to secure the application effectively.

## Available Routes

### `POST /auth/login`
- **Description**: Authenticates a user using the local strategy and returns a JWT token.
- **How to Test**:
  1. Use a tool like [Postman](https://www.postman.com/) or [cURL](https://curl.se/).
  2. Send a `POST` request to `http://localhost:3000/auth/login` with the following JSON body:
     ```json
     {
       "username": "your-username",
       "password": "your-password"
     }
     ```
  3. If successful, you will receive a response containing the JWT token.

### `GET /profile`
- **Description**: Retrieves the profile of the authenticated user. Requires a valid JWT token.
- **How to Test**:
  1. Obtain a JWT token by logging in via the `/auth/login` route.
  2. Send a `GET` request to `http://localhost:3000/profile` with the following header:
     ```
     Authorization: Bearer <your-jwt-token>
     ```
  3. If the token is valid, you will receive the user's profile information.

### Notes
- Ensure the server is running on `http://localhost:3000` or the appropriate host and port.
- Replace `<your-username>`, `<your-password>`, and `<your-jwt-token>` with actual values during testing.
- Use tools like [JWT.io](https://jwt.io/) to decode and verify your JWT tokens if needed.