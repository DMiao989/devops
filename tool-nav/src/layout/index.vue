<template>
  <el-container>
    <Menu></Menu>
    <el-container>
      <el-header class="el-header">
        <Header></Header>
      </el-header>
      <el-main class="main"><router-view></router-view></el-main>
      <el-footer class="footer">
        <p>© 1993-2024</p>
        <div><a href="http://172.32.6.199">172.32.6.199 </a></div>
        <p>debase on</p>
        <div><a href="../cn/about.html">和利时</a></div>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import Menu from "./component/menu.vue";
import Header from "./component/header.vue";
import { useExpandStore } from "@/store/index";
import { storeToRefs } from "pinia";

const { isExpand } = storeToRefs(useExpandStore());
</script>

<style scoped lang="scss">
.el-aside-unexpand {
  width: 64px;
}
.el-header {
  padding: 0px 0px;
  height: 74px;
}
.footer {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: aliceblue;
  div {
    padding: 0 10px;
  }
}
</style>