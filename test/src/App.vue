<template>
  <p>testing...</p>
</template>

<script>
import logger, { config } from "../../lib";
export default {
  setup() {
    logger().error('error')
    logger().warn('warn')
    logger('报错了').error({a: 1, b: 2})
    logger().debug('debug')
    logger().info('info')
    logger().info(1)
    logger().info(true)
  }
}
</script>
