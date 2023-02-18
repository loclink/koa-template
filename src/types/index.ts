// 错误信息类型
export interface ErrorType {
  code: number | string;
  message: string;
}

// 成功信息类型
export interface SuccessType {
  code?: number;
  message?: string;
  data?: object;
}

// 错误列表类型
export interface ErrorTypes {
  TOKEN_CHECK_FAILED: ErrorType;
}
