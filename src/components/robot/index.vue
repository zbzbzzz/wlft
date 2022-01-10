<template>
  <div class="robotBox">
    <div class="text">
      <p>{{ msg }}</p>
    </div>
    <div class="robot"></div>
  </div>
</template>

<script>
export default {
  name: 'z-robot',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="less">
.robotBox {
  height: 284px;
  width: 692px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
.robot {
  width: 35%;
  height: 100%;
  background-image: url('~@/assets/img/robot.gif');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%, 100%;
  position: relative;
}
.text {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6%;
  width: 62%;
  height: 82%;
  text-align: left;
  line-height: 50px;
  padding: 10px;
  font-size: 20px;
  color: #ffffff;
  p {
    margin: 0px;
  }
}
</style>
