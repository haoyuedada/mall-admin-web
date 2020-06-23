<template>
  <div class="home">
    sfsdfsd
  </div>
</template>

<style>

</style>

<script>
  export default {
    data() {
      return {msg: '初始代模板'}
    },
    methods:{
      handleOpen(key, keyPath){
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
