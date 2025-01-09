<template>
  <div v-for="(item, groupIndex) in cateList" :key="item.id" class="cate-item">
    <!-- 分类标题 -->
    <div class="cate-title">
      <svg-icon
        class="svg-icon"
        iconName="icon-biaoqian"
        width="20px"
        height="20px"
      ></svg-icon>
      <span :id="item.id">{{ item.name }}</span>
    </div>
    <!-- 具体展示 -->
    <div class="cate-detail">
      <el-card
        v-for="(child, childIndex) in item.children"
        :key="child.name"
        ref="cardRefs"
        class="card"
        :id="child.name"
        shadow="hover"
        body-style="width:100%;display:flex;padding:10px"
        @mouseenter="handleMouseEnter(groupIndex, childIndex)"
        @mouseleave="onClickOutside"
        @click="handleClick(child.url)"
      >
        <!-- 图标 -->
        <div>
          <img
            :src="getAssetsFile(child.imgUrl)"
            width="50px"
            height="50px"
            style="border-radius: 50%"
          />
        </div>
        <div class="description">
          <!-- 名称 -->
          <span>{{ child.name }}</span>
          <!-- 描述 -->
          <div>{{ child.des }}</div>
        </div>
      </el-card>
    </div>
  </div>
  <el-popover
    ref="popoverRef"
    :virtual-ref="cardRef"
    :visible="hidePopover"
    virtual-triggering
    :content="cateList[group].children[child].url"
    popper-style="width:auto;font-weight:600;"
  >
  </el-popover>
</template>

<script setup>
import { reactive, ref, unref, nextTick, handleError, computed } from "vue";
import { ClickOutside as vClickOutside } from "element-plus";
import { cateList } from "@/enums/cate-list.js";
import { getAssetsFile } from "../utils/pub-use";
const hidePopover = ref(false);
const cardRefs = ref([]);
const cardRef = ref();
const popoverRef = ref();
const group = ref(0);
const child = ref(0);
//控制popover显示与隐藏
const handleMouseEnter = (groupIndex, childIndex) => {
  group.value = groupIndex;
  child.value = childIndex;
  let leng = 0;
  for (let i = groupIndex - 1; i >= 0; i--) {
    leng = leng + cateList[i].children.length;
  }
  cardRef.value = cardRefs.value[leng + childIndex];
  hidePopover.value = true;
};
const onClickOutside = () => {
  hidePopover.value = false;
};

// 点击网站跳转
const handleClick = (url) => {
  window.open(url);
};
</script>

<style lang="scss" scoped>
.cate-item {
  margin-bottom: 50px;
}
.cate-title {
  display: flex;
  align-items: center;
  margin: 20px 0px;
  span {
    display: block;
    margin-left: 20px;
    font-size: 20px;
    font-weight: 1000;
  }
}
.cate-detail {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: center;
}
.card {
  width: 20%;
  height: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 25px;
  border-color: #b5d9f5;
  .description {
    margin-left: 10px;
    span {
      font-size: 18px;
      font-weight: 700;
    }
  }
}

.card:hover {
  /* 设置 hover 样式 */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transform: translateY(-5px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
</style>