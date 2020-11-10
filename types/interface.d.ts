import { Level } from "./enum";
export interface Logger {
    disabled: boolean;
    prefix?: string | undefined;
    color: string;
    fontSize: string;
}
export interface LevelLogger extends Logger {
    [Level.INFO]?: any;
    [Level.DEBUG]?: any;
    [Level.WARN]?: any;
    [Level.ERROR]?: any;
}
export interface LogFunc {
    [Level.INFO]?(prefix?: string): void | string;
    [Level.DEBUG]?(prefix?: string): void | string;
    [Level.WARN]?(prefix?: string): void | string;
    [Level.ERROR]?(prefix?: string): void | string;
}
export interface InitConf {
    unDeclare?: boolean;
    disabled?: boolean;
    prefix?: string;
}
export interface ConfigLogger {
    disabled?: boolean;
    prefix?: string | undefined;
    color?: string;
    fontSize?: string;
}
