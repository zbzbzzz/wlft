<template>
  <div>
    <audio autoplay
           ref="audio"
           @ended="end">
      <source src="@/assets/audio/2.1.mp3" />
    </audio>
    <audio ref="audio2">
      <source src="@/assets/audio/2.2.mp3" />
    </audio>
    <div class="face-back">
      <div class="camera"></div>
      <div class="person">
        <div class="mian">
          <img src="@/assets/img/fg.png" />
        </div>
        <div class="input">
          <span>审判员：</span>
          <input type="text" />
        </div>
      </div>
    </div>
    <div class="button"
         @click="en">进入未来法庭</div>
    <z-robot class="zrobot"
             :msg="msg"></z-robot>
  </div>
</template>

<script>
export default {
  name: 'face',
  data: function () {
    return {
      msg: '请面向摄像头拍照，我将为您穿上法袍。'
    }
  },
  mounted() {
    this.$refs.audio.play()
  },
  methods: {
    end() {
      console.log(11)
    }
  }
}
</script>

<style lang="less" scoped>
.button {
  position: absolute;
  border-radius: 6px;
  height: 40px;
  width: 120px;
  line-height: 40px;
  background-color: #1cecf6;
  bottom: 40px;
  right: 40px;
}
.face-back {
  position: relative;
  margin: auto;
  top: 200px;
  width: 1350px;
  height: 700px;
  background-image: url('~@/assets/img/face_back.png');
  background-position: top, top;
  background-repeat: no-repeat, no-repeat;
  background-size: 100%, 100%, 100%, 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  .camera {
    width: 700px;
    height: 550px;
    background-image: url('~@/assets/img/face_camera.png');
    background-position: top, top;
    background-repeat: no-repeat, no-repeat;
    background-size: 100%, 100%, 100%, 100%;
  }
  .person {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    .main {
      height: 500px;
    }
    .input {
      height: 100px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
  }
}
.zrobot {
  position: absolute;
  width: 400px;
  top: 0px;
  right: 200px;
  /deep/ .text {
    height: 90px;
    border-radius: 10px;
  }
}
</style>
