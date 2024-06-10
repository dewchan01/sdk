import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';

@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  public catch(exception: unknown, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    let status: number;
    let message: string | object;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const responseBody = exception.getResponse();

      // Handle validation errors
      if (
        typeof responseBody === 'object' &&
        'message' in responseBody &&
        Array.isArray(responseBody.message)
      ) {
        message = responseBody.message;
      } else {
        message = responseBody;
      }
    } else if (exception instanceof Error) {
      status =
        (exception as any).statusCode ?? HttpStatus.INTERNAL_SERVER_ERROR;
      message = exception.message;
      if (status === HttpStatus.INTERNAL_SERVER_ERROR) {
        console.log(exception.stack);
      }
    } else {
      status = HttpStatus.INTERNAL_SERVER_ERROR;
      message = 'Custom error message for non http error';
    }

    response.status(status).json({
      statusCode: status,
      message,
      timestamp: new Date().toISOString(),
      path: request.url,
    });
  }
}
