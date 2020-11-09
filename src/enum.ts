/**
 * 日志级别
 *
 * @export
 * @enum {string}
 */
export enum Level {
  INFO = "info",
  DEBUG = 'debug',
  WARN = "warn",
  ERROR = "error",
}

/**
 * 字体大小
 *
 * @export
 * @enum {string}
 */
export enum FontSize {
  NORMAL = "11px",
  LARGE = "15px",
}

/**
 * 字体颜色
 *
 * @export
 * @enum {string}
 */
export enum Color {
  BLACK = "#1f1f1f",
  GRAY = "#434343",
  GREEN = "#5b8c00",
  ORANGE = "#d46b08",
  RED = "#cf1322",
  WHITE = "#fafafa",
  BLUE = '#1475b2',
  /** log green */
  LIME = '#42c02e',
}

export enum Environment {
  DEV = 'development',
  PRO = 'production',
}

/**
 * 
 *
 * @export
 * @enum {string}
 */
export enum WindowLogKey {
  PRIVATE_KEY = "SELF_LOG_KEY"
}