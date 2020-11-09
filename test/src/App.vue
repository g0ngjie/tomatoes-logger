<template>
  <p>testing...</p>
</template>

<script>
import logger, {config} from "../../lib";
export default {
  setup() {
    logger().error('error')
    logger().warn('warn')
  }
}
</script>
