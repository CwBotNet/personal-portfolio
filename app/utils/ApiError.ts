class ApiError extends Error {
  statusCode: number;
  message: string;
  errors: any;
  data: any;
  success: boolean;

  constructor(
    statusCode: number,
    message: string = "somthing went wrong",
    errors: any[] = [],
    stack: string = ""
  ) {
    super(message);
    this.statusCode = statusCode;
    this.message = message;
    this.errors = errors;
    this.data = null;
    this.success = false;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
