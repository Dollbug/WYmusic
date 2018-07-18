<template>
<section class="header">
    <slot></slot>
</section>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style lang="less">
.header {
  height: 120px;
  line-height: 120px;
  background: #ac0a0a;
 text-align: center;
  padding: 0 20px;
}
span {
  color: #fff;
  font-size: 32px;
}
.iconfont {
  font-size: 50px;
  color: #fff;
}
</style>
