# Unhandled Error in Express.js Route

This repository demonstrates an uncommon error in Express.js route handlers: missing error handling for invalid user IDs.

## Bug Description

The `bug.js` file contains an Express.js route that fetches user data based on a user ID from the request parameters. However, it lacks proper error handling for cases where the user ID is invalid (e.g., not found in the database, malformed).

Without proper error handling, an exception might be thrown when fetching non-existing users, which may cause the server to crash or lead to unexpected behavior, exposing vulnerabilities.

## Solution

The `bugSolution.js` file demonstrates a fix by incorporating comprehensive error handling to gracefully manage invalid user IDs, providing appropriate responses to the client (such as a 404 Not Found error).