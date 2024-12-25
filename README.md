
# nest-exception

This package is based on Original [NestJs](https://github.com/nestjs/nest/) Http exceptions.
 `nest-exception` brings the simplicity and structured approach of NestJS error handling to any Node.js application. This for non NestJs projects.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Installation

To install the package, run:

```bash
npm install nest-exception
```

or with yarn:

```bash
yarn add nest-exception
```

## Why `nest-exception`?

NestJS provides an excellent mechanism for handling exceptions, but it is tightly coupled with the Nest framework. `nest-exception` bridges the gap by offering a same structured error-handling experience to projects outside of NestJS. It allows you to:

- Define custom exceptions with meaningful metadata.
- Maintain consistency in error responses.
- Improve debugging with detailed error information.

## Features

- **Structured Errors**: Create exceptions with a clear structure and metadata.
- **Customizable**: Easily define custom exceptions tailored to your application needs.
- **Framework Agnostic**: Designed for use in any Node.js project.
- **Inspired by NestJS**: Brings the familiarity and power of NestJS exceptions to non-NestJS projects.

## Usage

### Basic Example

```javascript
const { HttpException, NotFoundException } = require('nest-exception');

// Throwing a general exception
throw new HttpException('An error occurred', 500);

// Throwing a specific exception
throw new NotFoundException('Resource not found');
```

### Custom Exceptions

You can extend the base `HttpException` class to define custom exceptions:

```javascript
const { HttpException } = require('nest-exception');

class CustomException extends HttpException {
  constructor(message, statusCode, customData) {
    super(message, statusCode);
    this.customData = customData;
  }
}

throw new CustomException('A custom error occurred', 400, { field: 'value' });
```

### Handling Exceptions

Use a centralized error-handling middleware to catch and respond to exceptions in your application:

```javascript
const express = require('express');
const { HttpException } = require('nest-exception');

const app = express();

// Middleware to handle exceptions
app.use((err, req, res, next) => {
  if (err instanceof HttpException) {
    return res.status(err.status).json({
      message: err.message,
      statusCode: err.status,
      ...err,
    });
  }

  // Default to 500 for unexpected errors
  res.status(500).json({
    message: 'Internal Server Error',
  });
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

## Available Exceptions

All exceptions in nest js have.

## Contributing

Contributions are welcome! If you find a bug or want to suggest a feature, feel free to create an issue or submit a pull request.
