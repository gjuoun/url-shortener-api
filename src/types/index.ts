declare global {
  namespace Express {
    export interface Response {
      data: ShortenedUrl
    }
  }
}



export interface ApiResponse{
  success: boolean;
  message?: string;
  data?: ShortenedUrl
}
export interface ShortenedUrl{
  shortenedUrl: string;
  originalUrl: string;
  fromIp: string;
  createdAt: number;
}

export {};
