import { Context } from 'koa';
import { ErrorType } from './src/types';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      APP_PORT: string;
      MYSQL_HOST?: string;
      MYSQL_PORT?: string;
      MYSQL_USER?: string;
      MYSQL_PASSWORD: string;
      MYSQL_DATABASE: string;
      KOA_ENV?: 'INIT' | 'DEV' | 'PRD';
    }
  }
}

declare module 'koa' {
  interface BaseContext {
    emitError(errorType: ErrorType): void;
    success(message?: string, data?: object): void;
    currentState(this: Context): { date: number; ip: string | undefined };
  }
}
