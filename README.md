# tomatoes-logger

Lightweight front end logging tool

## Installing
```javascript
$ yarn add @tomatoes/logger
```

## Functions
```typescript
/**
 * Global status
 * @export
 * @param {boolean} bool
 * @returns {(void | string)}
 */
export declare function disabled(bool?: boolean): void | string /**errMsg */;
/**
 * Configuration
 * @export
 * @param {Level} level
 * @param {Logger} opts
 * @returns {(void | string)}
 */
export declare function config(level: Level, opts: ConfigLogger): void | string /**errMsg */;
/**
 * Clear log
 */
export declare function clear(): void | string /**errMsg */;
/**
 * logger
 * @export
 * @param {string} [prefix]
 */
export default function logger(prefix?: string): LogFunc;
/**
 * initialization
 * @export
 * @param {InitConf} conf
 */
export declare function init(conf?: InitConf): void;
```

## Usage
```javascript
import logger, { init, config, Enum, disabled } from "@tomatoes/logger";

init(/** { prefix: "[-] ", unDeclare: false, disabled: false } */);

// config(Enum.Level.INFO, { prefix: "--->", color: Enum.Color.WHITE });

// disabled()

logger().error('error') //error message
logger().warn('warn')
logger('::').error({a: 1, b: 2})
logger().debug('debug')
logger().info('info')
logger().info(1)
logger().info(true)
```

## License
[The MIT License](./LICENSE)