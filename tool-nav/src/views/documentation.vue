<template>
  <div class="mark-container">
    <div class="menu-con">
      <div
        v-for="item in titleList"
        :class="item.isClicked ? 'href-actived' : 'href'"
        :key="item.title"
        :style="{ padding: `10px 0 10px ${item.tagName * 20}px` }"
        @click="handleClick(item)"
      >
        <a>{{ item.title }}</a>
      </div>
    </div>

    <v-md-preview
      style="margin-left: 600px"
      :text="text"
      :include-level="[2, 3]"
    ></v-md-preview>
  </div>
</template>

<script setup>
import { marked } from "marked";
import { onMounted, ref, watchEffect, computed, nextTick } from "vue";
import { useRouter, useRoute } from "vue-router";
import { mdList } from "@/enums/menu-list.js";

const input = ref(null);
const text = ref("");
const anchors = ref([]);
const titleList = ref([]);
const tagList = ref([]);
const elementList = ref([]);
const isClicked = ref(false);
const routes = useRoute();
const mdModule = import.meta.glob("/src/assets/markdown/*.md", {
  as: "raw",
});
// 处理自定义锚点
const handleAnchor = () => {
  // 获取界面中标题元素
  anchors.value = document.querySelectorAll("h1,h2,h3,h4,h5,h6");
  console.log(anchors.value);
  // 获取标题名称,过滤掉空
  titleList.value = Array.from(anchors.value).filter((item) =>
    item.innerText.trim()
  );
  // 将界面中标题存储
  elementList.value = titleList.value;

  // 获取标题的等级
  tagList.value = Array.from(
    new Set(titleList.value.map((item) => item.tagName))
  ).sort();

  titleList.value = titleList.value.map((item) => {
    return {
      title: item.innerText,
      tagName: tagList.value.indexOf(item.tagName) + 1,
      isClicked: false,
    };
  });
};

// 处理点击跳转
const handleClick = (el) => {
  titleList.value.forEach((item) => {
    if (item.isClicked) {
      item.isClicked = false;
    }
  });
  el.isClicked = true;
  // 查找页面中和点击内容相同 名称
  // 这里存在一个问题：如果两个标题相同则可能无法区分，所以按照实际情况，不可能标题等级+标题内容同时相同
  // 所以判断 title === innerText；tagName === tagname即可
  const anchorEle = elementList.value.filter(
    (item) =>
      item.innerText === el.title &&
      tagList.value.indexOf(item.tagName) + 1 === el.tagName
  );
  // 锚点到 anchorEle[0]元素
  anchorEle[0].scrollIntoView({ behavior: "smooth" });
};

// 根据路由判断当前组件应该引入的md文档；
// 所有md文档都共用一个组件
const currentRoute = computed(() => {
  return routes.fullPath.split("/")[2]; //获取当前的route
});
watchEffect(() => {
  mdList.forEach(async (item) => {
    if (item.route === currentRoute.value) {
      text.value = marked(
        await mdModule[`/src/assets/markdown/${item.mdUrl}.md`]()
      );
      nextTick(() => {
        handleAnchor();
      });
    }
  });
});
</script>

<style scoped lang="scss">
.mark-container {
  display: flex;
  .menu-con {
    background-color: #fafafa;
    overflow: auto;
    position: fixed;
    left: 0;
    width: 600px;
    max-height: 100%;
  }
  a {
    cursor: pointer;
  }
  // 鼠标悬停在链接上时
  .href:hover {
    background-color: #cec9c9;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    font-weight: 800;
  }
  .href-actived {
    font-weight: 800;
  }
}
</style>