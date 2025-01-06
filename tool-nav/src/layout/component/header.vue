<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="expand-button">
      <el-icon
        class="el-icon"
        v-show="isExpand"
        @click="changeExpand()"
        :size="28"
        color="#b0b4b2"
        ><Expand
      /></el-icon>
      <el-icon
        class="el-icon"
        v-show="!isExpand"
        :size="28"
        color="#b0b4b2"
        @click="changeExpand()"
        ><Fold
      /></el-icon>
    </div>
    <div class="right-item">
      <!-- 全屏按钮 -->
      <div @click="handleFullscreen()" class="full-screen-button">
        <svg-icon
          v-if="isFullscreen"
          iconName="icon-quanping_o"
          width="28px"
          height="28px"
        ></svg-icon>
        <svg-icon
          v-else
          iconName="icon-quxiaoquanping_o"
          width="28px"
          height="28px"
        ></svg-icon>
      </div>
      <!-- 个人中心 -->
      <el-dropdown placement="bottom">
        <div>
          <svg-icon
            iconName="icon-gerenzhongxin"
            width="28px"
            height="28px"
          ></svg-icon>
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item
              ><span @click="personSetting">个人中心</span></el-dropdown-item
            >
            <el-dropdown-item
              ><span @click="exitLog">退出登录</span></el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { Expand, Fold } from "@element-plus/icons-vue";
import { storeToRefs } from "pinia";
import { useExpandStore } from "@/store/index";
import screenfull from "screenfull";

const store = useExpandStore(); //使用store
const { isExpand } = storeToRefs(store); //提取store时，保持响应式属性，否则一直是store中的初始值
const { changeExpand } = store; //action的changeExpand可以直接提出
const isFullscreen = ref(false);
const handleFullscreen = () => {
  if (screenfull.isEnabled) {
    screenfull.toggle();
  }
  isFullscreen.value = screenfull.isFullscreen; //模版条件渲染不能绑定只读属性。
};

const personSetting = () => {
  console.log("跳转到个人设置页面");
};

const exitLog = () => {
  console.log("跳转到登录页");
};
</script>

<style scoped lang="scss">
.header {
  background-color: #f0f0f0;
  height: 74px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .expand-button {
    width: 30px;
    padding-left: 20px;
  }
  .right-item {
    display: flex;
    padding-right: 10px;
  }
  .full-screen-button {
    padding-right: 20px;
  }
}
</style>  