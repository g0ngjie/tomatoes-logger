# tomatoes-logger

Lightweight front end logging tool

## Installing
```javascript
$ yarn add @tomatoes/logger
```

## Functions
```typescript
/**
 * initialization
 */
function init(conf?: InitConf): void;
/**
 * Configuration
 */
function config(level: Level, opts: ConfigLogger): void | string /**errMsg */;
/**
 * Global status
 */
function disabled(bool?: boolean): void | string /**errMsg */;
/**
 * Clear log
 */
function clear(): void | string /**errMsg */;
/**
 * logger
 */
function logger(prefix?: string): LogFunc;
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
[The ISC License](./LICENSE)