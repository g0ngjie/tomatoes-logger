import { Color, FontSize, Level, WindowLogKey } from "./enum";
import { ConfigLogger, InitConf, LevelLogger, Logger, LogObject } from "./interface";
import { InfoSet, DebugSet, WarnSet, ErrorSet, LevelToArray, KeyToLevel } from "./config";
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
  const _levelFunc: any = {}
  if (!__this) LevelToArray.forEach(level => _levelFunc[level] = __toNoneFunc)
  else LevelToArray.forEach(level => {
    _levelFunc[level] = function (...msg: any) {
      __log(prefix, msg, KeyToLevel[level], __this)
    }
  })
  return _levelFunc
}

/**
 * 初始化
 *
 * @export
 * @param {InitConf} conf
 */
export function init(conf?: InitConf): void {
  win[WindowLogKey.PRIVATE_KEY] = {
    // default setting
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

// console.log("%c3D Text"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");

// console.log('%cRainbow Text ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');
