<template>
  <div class="home">
    <chartShows></chartShows>
  </div>
</template>

<style>

</style>

<script>
  import chartShows from '@/components/chartShows'

  export default {
    data() {
      return {msg: '初始代模板'}
    },
    components:{
      chartShows
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
