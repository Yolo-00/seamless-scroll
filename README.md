# seamless-scroll-v3

> 基于 Vue3 的无缝衔接滚动组件

## Install

```bash
 yarn add seamless-scroll-v3
 # 或者使用 npm
 npm install seamless-scroll-v3
```

### 示例

```vue
<script lang="ts" setup>
import { ref } from "vue";
import { SeamlessScroll } from "seamless-scroll-v3";

const scrollRef = ref(null);
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

const handleReset = (val) => {
    scrollRef.value.reset();
    classOption.value.direction = val;
};
</script>

<template>
  <button @click="handleReset('top')">向上</button>
  <button @click="handleReset('bottom')">向下</button>
  <button @click="handleReset('left')">向左</button>
  <button @click="handleReset('right')">向右</button>
  <div  style="height: 300px;">
      <SeamlessScroll ref="scrollRef" :data="listData" :class-option="classOption" class="warp">
          <ul class="item">
              <li v-for="(item, index) in listData" :key="index">
                  <span v-text="item.title" />
              </li>
          </ul>
      </SeamlessScroll>
  </div>
</template>

<style scoped lang="scss">
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
            height: 50px;
            font-size: 15px;
            line-height: 50px;
        }
    }
}
</style>
```

### seamless-scroll 参数

| 属性名 | 说明 | 类型 | 默认 |
| --- | --- | --- | --- |
| data | 无缝滚动 list 数据 | Array | — |
| classOption | 配置项 | [classOption](https://chenxuan0000.github.io/vue-seamless-scroll/guide/properties.html#classoption) | - |

### Events 事件

| 方法名 | 说明 | 返回值 |
| --- | --- | --- |
| scrollEnd | 回调 | — |

### Exposes

| 方法名 | 说明 | 参数 | 返回值 |
| --- | --- | --- | --- |
| reset | 重置 | - | — |

## 如何贡献

非常欢迎您的加入！[提一个 Issue](https://github.com/Yolo-00/seamless-scroll/issues/new/choose) 或者提交一个 `Pull Request`

**Pull Request:**

1. Fork 代码!
2. 创建自己的分支: `git checkout -b feat/xxxx`
3. 提交您的修改: `git commit -am 'feat(function): add xxxxx'`
4. 推送您的分支: `git push origin feat/xxxx`
5. 提交`pull request`

## `Git` 贡献提交规范

参考 [vue](https://github.com/vuejs/vue/blob/dev/.github/COMMIT_CONVENTION.md) 规范 ([Angular](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular))

- `feat` 增加新功能
- `fix` 修复问题/BUG
- `style` 代码风格相关无影响运行结果的
- `perf` 优化/性能提升
- `refactor` 重构
- `revert` 撤销修改
- `test` 测试相关
- `docs` 文档/注释
- `chore` 依赖更新/脚手架配置修改等
- `workflow` 工作流改进
- `ci` 持续集成
- `types` 类型定义文件更改
- `wip` 开发中

## `Star`

非常感谢留下星星的好心人，感谢您的支持 ❤️

[![Stargazers repo roster for Yolo-00/seamless-scroll](https://bytecrank.com/nastyox/reporoster/php/stargazersSVG.php?user=Yolo-00&repo=seamless-scroll)](https://github.com/Yolo-00/seamless-scroll/stargazers)

## `Fork`

瞧，那些 `小哥哥` 、`小姐姐` 认真 `学习` 的样子真滴是 `哎呦不错哦` ❤️

[![Forkers repo roster for Yolo-00/seamless-scroll](https://bytecrank.com/nastyox/reporoster/php/forkersSVG.php?user=Yolo-00&repo=seamless-scroll)](https://github.com/Yolo-00/seamless-scroll/network/members)
