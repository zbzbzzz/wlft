<template>
  <div class="back">
    <img src="@/assets/img/fh.png"
         class="fh" />
    <router-view></router-view>
  </div>
</template>

<script>
</script>

<style lang="less" scoped>
.back {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url('~@/assets/img/bg.gif');
  background-position: top, top;
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%, 100%, 100%;
  top: 0px;
  left: 0px;
  .fh {
    position: absolute;
    left: 46%;
    top: 14%;
  }
}
</style>
