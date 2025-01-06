<template>
  <svg
    :class="svgClass"
    aria-hidden="true"
    :style="{ width: width, height: height }"
  >
    <use :xlink:href="iconClassName"></use>
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps([
  "className",
  "iconName",
  "color",
  "width",
  "height",
]);

// svg名称
const iconClassName = computed(() => {
  return `#${props.iconName}`;
});
/* 在线链接服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */

// svg的类名
const svgClass = computed(() => {
  if (props.svgClass) {
    return `svg-icon ${props.className}`;
  }
  return "svg-icon";
});
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 2em;
  height: 2em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>