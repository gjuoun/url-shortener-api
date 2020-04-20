declare global {
  namespace Express {
    export interface Response {
      shortenedUrl: string;
      originalUrl: string;
    }
  }

  namespace App {
    export interface ErrorMessage {
      success: boolean;
      errMessage: string;
    }

    export interface SuccessMessage {
      success: boolean;
      shortenedUrl: string;
    }
  }
}

export {};
