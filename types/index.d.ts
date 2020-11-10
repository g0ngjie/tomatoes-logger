import { Level } from "./enum";
import { ConfigLogger, InitConf, LogFunc } from "./interface";
export * as Enum from './enum';
/**
 * 全局状态
 *
 * @export
 * @param {boolean} bool
 * @returns {(void | string)}
 */
export declare function disabled(bool?: boolean): void | string;
/**
 * 配置项
 *
 * @export
 * @param {Level} level
 * @param {Logger} opts
 * @returns {(void | string)}
 */
export declare function config(level: Level, opts: ConfigLogger): void | string;
/**
 * 清空日志
 */
export declare function clear(): "logger not init" | "logger is disabled" | undefined;
/**
 * logger
 *
 * @export
 * @param {string} [prefix]
 */
export default function logger(prefix?: string): LogFunc;
/**
 * 初始化
 *
 * @export
 * @param {InitConf} conf
 */
export declare function init(conf?: InitConf): void;
