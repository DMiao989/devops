
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
      @select="handleSelect"
    >
      <template v-for="item in menuList" :key="item.index">
        <el-sub-menu
          v-if="item.children"
          :index="item.index"
          @click="handleClick(item.name)"
        >
          <template #title>
            <el-icon><component :is="item.icon"></component></el-icon>
            <span>{{ item.name }}</span>
          </template>
          <template v-for="child in item.children" :key="child.index">
            <el-menu-item :index="child.index">
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

        <el-menu-item
          v-else
          :index="item.index"
          @click="handleClick(item.name)"
        >
          <el-icon> <component :is="item.icon"></component> </el-icon>
          <template #title> {{ item.name }} </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive, markRaw } from "vue";
import {
  Location,
  Coordinate,
  Notebook,
  Platform,
  DataBoard,
  StarFilled,
  Place,
} from "@element-plus/icons-vue";
import { useExpandStore } from "@/store/index.js";
import { storeToRefs } from "pinia";
import router from "@/router/index.js";

const { isExpand } = storeToRefs(useExpandStore());
const menuList = reactive([
  {
    index: "运维站点",
    icon: markRaw(Location),
    name: "运维站点",
  },
  {
    index: "测试环境",
    icon: markRaw(Platform),
    name: "测试环境",
  },
  {
    index: "演示环境",
    icon: markRaw(DataBoard),
    name: "演示环境",
  },
  {
    index: "虚拟化平台",
    icon: markRaw(Coordinate),
    name: "虚拟化平台",
  },
  {
    index: "常用站点",
    icon: markRaw(StarFilled),
    name: "常用站点",
  },
  {
    index: "文档教程",
    icon: markRaw(Notebook),
    name: "文档教程",
    children: [
      {
        index: "开发者资源站",
        groupName: "开发者资源站",
      },
      {
        index: "编码规范文档",
        groupName: "编码规范文档",
      },
      {
        index: "devops规范文档",
        groupName: "devops规范文档",
      },
      {
        index: "常用镜像站配置文档",
        groupName: "常用镜像站配置文档",
      },
    ],
  },
  {
    index: "关于本站",
    icon: markRaw(Place),
    name: "关于本站",
  },
]);

const handleSelect = (index: any, name: any) => {
  console.log("index", index, name);
  const anchor = document.getElementById(index);
  if (anchor) {
    anchor.scrollIntoView({ behavior: "smooth" }); //跳转到指定的位置
  }
};
// 点击关于本站跳转
const handleClick = (name: string) => {
  if (name === "关于本站") {
    router.push("/aboutme");
  } else {
    router.push("/site");
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