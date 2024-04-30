<script setup lang="ts">
import { ref } from "vue";
import SeamlessScroll from "./components/SeamlessScroll/index.vue";

const scrollRef = ref<typeof SeamlessScroll>();
const classOption = ref({
  direction: "top",
  step: 1,
  limitMoveNum: 5,
  hoverStop: false
});
const listData = ref([{
  title: "无缝滚动第一行无缝滚动第一行！！！！！！！！！！"
}, {
  title: "无缝滚动第二行无缝滚动第二行！！！！！！！！！！"
}, {
  title: "无缝滚动第三行无缝滚动第三行！！！！！！！！！！"
}, {
  title: "无缝滚动第四行无缝滚动第四行！！！！！！！！！！"
}, {
  title: "无缝滚动第五行无缝滚动第五行！！！！！！！！！！"
}, {
  title: "无缝滚动第六行无缝滚动第六行！！！！！！！！！！"
}, {
  title: "无缝滚动第七行无缝滚动第七行！！！！！！！！！！"
}, {
  title: "无缝滚动第八行无缝滚动第八行！！！！！！！！！！"
}, {
  title: "无缝滚动第九行无缝滚动第九行！！！！！！！！！！"
}, {
  title: "无缝滚动第十行无缝滚动第十行！！！！！！！！！！"
}]);

const handleReset = (val: string) => {
  scrollRef.value?.reset();
  classOption.value.direction = val;
};
</script>

<template>
  <div>
    <div style="display: flex;justify-content: center;">
      <button @click="handleReset('top')">向上</button>
      <button @click="handleReset('bottom')">向下</button>
      <button @click="handleReset('left')">向左</button>
      <button @click="handleReset('right')">向右</button>
    </div>
    <div style="height: 300px;margin-top: 50px;">
      <SeamlessScroll ref="scrollRef" :data="listData" :class-option="classOption" class="warp">
        <ul class="item">
          <li v-for="(item, index) in listData" :key="index">
            <span v-text="item.title" />
          </li>
        </ul>
      </SeamlessScroll>
    </div>
  </div>
</template>

<style scoped>
.warp {
  width: 360px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  background: #e6e6e6;

  ul {
    padding: 0;
    margin: 0 auto;

    li {
      display: flex;
      justify-content: space-between;
      height: 30px;
      font-size: 15px;
      line-height: 30px;
    }
  }
}
</style>
