declare namespace Express {
  interface Response {
    shortenedUrl: string;
    originalUrl: string;
  }
}

declare namespace App {
  interface ErrorMessage {
    success: boolean;
    errMessage: string;
  }

  interface SuccessMessage {
    success: boolean;
    shortenedUrl: string;
  }
}
