<template>
  <div>
    <audio ref="audio"
           @ended="end">
      <source src="@/assets/audio/1.1.mp3" />
    </audio>
    <img src="@/assets/img/jin.gif"
         class="robot" />
    <!-- <z-robot class="zrobot"
             msg="您好！欢迎来到未来法庭，我们一起体验做法官吧。我是您的法官助理“小智”。"></z-robot> -->
  </div>
</template>

<script>
export default {
  name: 'begin',
  mounted() {
    setTimeout(() => {
      this.$refs.audio.play()
    }, 500)
  },
  methods: {
    end() {
      const that = this
      setTimeout(() => {
        that.$router.push('/face')
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.robot {
  position: relative;
  margin: auto;
  top: 200px;
}
</style>
