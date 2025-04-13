## Design
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

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
