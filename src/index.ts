import { Color, FontSize, Level, WindowLogKey } from "./enum";
import { ConfigLogger, InitConf, LevelLogger, Logger, LogObject } from "./interface";
import { InfoSet, DebugSet, WarnSet, ErrorSet } from "./config";
import helloFunc from "./hello";

const win: any = window

export * as Enum from './enum'

/**
 * 全局状态
 *
 * @export
 * @param {boolean} bool
 * @returns {(void | string)}
 */
export function disabled(bool: boolean = true): void | string {
  const __this: Logger = win[WindowLogKey.PRIVATE_KEY]
  if (!__this) return 'logger not init'
  __this.disabled = bool
}

/**
 * 配置项
 *
 * @export
 * @param {Level} level
 * @param {Logger} opts
 * @returns {(void | string)}
 */
export function config(level: Level, opts: ConfigLogger): void | string {
  const __this: LevelLogger = win[WindowLogKey.PRIVATE_KEY]
  if (!__this) return 'logger not init'
  if (__this.disabled) return 'logger is disabled'
  if (!__this[level]) __this[level] = {}
  __this[level] = opts
}

export function clear() {
  const __this: LevelLogger = win[WindowLogKey.PRIVATE_KEY]
  if (!__this) return 'logger not init'
  if (__this.disabled) return 'logger is disabled'
  console.clear()
}

function __log(prefix: string = '', msg: any[], level: Level, __this: LevelLogger) {
  if (__this.disabled) return
  const __targetLevel: Logger = __this[level]
  if (__targetLevel && __targetLevel.disabled) return
  let opts: string = '';
  if (__this[level]) {
    const __color: string = __targetLevel.color || __this.color
    const __fontSize: string = __targetLevel.fontSize || __this.fontSize
    opts = `color:${__color};font-size:${__fontSize}`
  }
  const _msgArr = [opts]
  let _regStr = ''
  for (let i = 0; i < msg.length; i++) {
    const _msg = msg[i];
    switch (typeof _msg) {
      case 'string':
        _regStr += `%c%s`
        _msgArr.push(opts)
        _msgArr.push(_msg)
        break;
      case 'object':
        _regStr += '%O'
        _msgArr.push(_msg)
        break;
      default:
        _regStr += `%c%s`
        _msgArr.push(opts)
        _msgArr.push(_msg)
        break;
    }
  }
  console.log(`%c${prefix || __this.prefix}${_regStr}`, ..._msgArr)
}

/**空funcion */
function __toNoneFunc() {
  return 'logger not init'
}

/**
 * logger
 *
 * @export
 * @param {string} [prefix]
 */
export default function logger(prefix?: string): LogObject {
  const win: any = window
  const __this: LevelLogger = win[WindowLogKey.PRIVATE_KEY]
  const { INFO, WARN, DEBUG, ERROR } = Level
  if (!__this) {
    return {
      [INFO]: __toNoneFunc,
      [WARN]: __toNoneFunc,
      [DEBUG]: __toNoneFunc,
      [ERROR]: __toNoneFunc,
    }
  }
  return {
    [INFO]: function (...msg: any) {
      __log(prefix, msg, INFO, __this)
    },
    [WARN]: function (...msg: any) {
      __log(prefix, msg, WARN, __this)
    },
    [DEBUG]: function (...msg: any) {
      __log(prefix, msg, DEBUG, __this)
    },
    [ERROR]: function (...msg: any) {
      __log(prefix, msg, ERROR, __this)
    },
  }
}

/**
 * 初始化
 *
 * @export
 * @param {InitConf} conf
 */
export function init(conf?: InitConf): void {
  win[WindowLogKey.PRIVATE_KEY] = {
    disabled: conf?.disabled,
    prefix: conf?.prefix || '',
    color: Color.BLACK,
    fontSize: FontSize.NORMAL,
    [Level.INFO]: InfoSet,
    [Level.DEBUG]: DebugSet,
    [Level.WARN]: WarnSet,
    [Level.ERROR]: ErrorSet,
  }
  win.logger = (prefix?: string) => logger(prefix)
  if (!conf?.unHello && !conf?.disabled) helloFunc()
}