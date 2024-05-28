# Contract-Job-API
Create a backend authentication system that takes in a username and a password. Username must be an email, and password must be at least 8 characters, with at least one symbol, alphanumeric characters (uppercase and lowercase) and at least a number. There must be proper error feedback for each case from the backend.

Authentication Service Documentation
Overview
This document provides a detailed guide on how to use the registration feature of the authentication service. The service handles user registration by validating email and password inputs according to specified rules.

Structure
Service Layer
Controller Layer
Route Layer
Main Entry File

1. Service Layer

File: auth.services.js
The service layer contains the business logic for user registration, including validation of the email and password.

Dependencies

email-validator: Validates email addresses.
password-validator: Validates the password.
HttpException: Custom error handling.

2. Controller Layer

File: auth.controller.js

The controller layer handles HTTP requests and responses, calling the service layer to perform the actual business logic.

Functionality

register(req, res, next):
Description: Handles the /register endpoint.
Request Body: Should contain email and password.
Response: Returns a success message and the registered user data.
Error Handling: Passes errors to the next middleware.

4. Route Layer

File: auth.routes.js

The route layer defines the endpoints and maps them to the appropriate controller functions.

Functionality

Endpoint: POST /register
Description: Registers a new user.
Handler: Calls the register function from the controller.

6. Main Entry File

Ensure all dependencies are installed. They include email-validator, password-validator, express and nodemon

To start the server. Use the command "npm run dev"
