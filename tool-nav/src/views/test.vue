<template>
  <el-text
    v-for="(item, index) in list"
    ref="textRefs"
    @click="handleClick(index)"
    >{{ item }}</el-text
  >
  <el-popover
    ref="popoverRef"
    :virtual-ref="textRef"
    :visible="hidePopover"
    title="With title"
    virtual-triggering
  >
    <div v-click-outside="onClickOutside">
      <span> popover content </span>
      <el-button link type="primary" @click="hidePopover = false"
        >删除</el-button
      >
    </div>
  </el-popover>
</template>
   
  <script setup lang="ts">
import { ref } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const textRefs = ref([]);
const textRef = ref();
const popoverRef = ref();
const hidePopover = ref(false);
const handleClick = (index) => {
  textRef.value = textRefs.value[index];
  hidePopover.value = true;
};
const onClickOutside = () => {
  hidePopover.value = false;
};
</script>