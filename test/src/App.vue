<template>
  <h3>单元测试</h3>
  <p>打开控制台查看效果</p>
</template>

<script>
import logger, {config} from "../../lib";
export default {
  setup() {
    logger().error('haha')
    logger().warn('haha')
  }
}
</script>
