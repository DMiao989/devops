
<template>
  <div class="menu-container">
    <!-- logo -->
    <div :class="isExpand ? 'logo' : 'logo-unexpend'">
      <img
        v-show="!isExpand"
        src="../../../public/logo.png"
        alt="logo"
        :width="isExpand ? '50px' : '30px'"
        :height="isExpand ? '50px' : '30px'"
      />
      <div class="logo-des" v-show="isExpand">
        <img src="../../../public/logo1.png" height="50px" />
      </div>
    </div>
    <!-- 菜单部分 -->
    <el-menu
      class="el-menu-vertical-demo"
      :collapse="!isExpand"
      :router="false"
    >
      <template v-for="item in menuList" :key="item.index">
        <!-- 存在二级菜单 -->
        <el-sub-menu v-if="item.children" :index="item.index">
          <template #title>
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="child in item.children" :key="child.index">
            <el-menu-item
              :index="child.index"
              @click="handleClick(item.isOpen, item.index, child.index)"
            >
              <!-- <el-icon> <component :is="child.icon"></component> </el-icon> -->
              <template #title> {{ child.groupName }} </template>
            </el-menu-item>
            <!-- <el-sub-menu :index="child.index">
              <template #title
                ><span>{{ child.groupName }}</span></template
              >
              <el-menu-item
                v-for="k in child.children"
                :key="k.index"
                :index="k.index"
                >{{ k.name }}</el-menu-item
              >
            </el-sub-menu> -->
          </template>
        </el-sub-menu>
        <!-- 不存在二级菜单 -->
        <el-menu-item
          v-else
          :index="item.index"
          @click="handleClick(item.isOpen, item.index, null)"
        >
          <el-icon> <component :is="item.icon"></component> </el-icon>
          <template #title> {{ item.name }} </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { nextTick } from "vue";
import { useExpandStore } from "@/store/index.js";
import { storeToRefs } from "pinia";
import router from "@/router/index.js";
import { menuList } from "@/enums/menu-list.js";

const { isExpand } = storeToRefs(useExpandStore());
// 不进行路由跳转的要进行锚点
const handleSelect = (parentIndex: string) => {
  const anchor = document.getElementById(parentIndex);
  // console.log("anchor", anchor);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" }); //跳转到指定的位置
  }
};
// 点击进行路由跳转
const handleClick = (isOpen: boolean, parentIndex: string, childIndex: any) => {
  // console.log(isOpen, parentIndex, childIndex);
  if (isOpen) {
    router.push(
      childIndex ? `/${parentIndex}/${childIndex}` : `/${parentIndex}`
    );
  } else {
    router.push("/site");
    // 使用nextTick包裹，否则拿不到dom元素
    nextTick(() => {
      handleSelect(parentIndex);
    });
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  background-color: #f0f0f0;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 240px;
  height: calc(100% - 74px);
  border: 0px;
}
.el-menu--collapse {
  height: calc(100% - 74px);
  border: 0px;
}

.logo {
  width: 220px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: all 0.3s ease; /* 所有属性的变化，持续时间 0.5s，缓动函数为 ease */
  .logo-des {
    margin: 10px;
  }
}

.logo-unexpend {
  width: 64px;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease; /* 所有属性的变化，持续时间 0.5s，缓动函数为 ease */
}
</style>