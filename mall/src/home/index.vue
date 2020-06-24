<template>
  <div class="home">
    <panelGroup></panelGroup>
    <chartShows></chartShows>
  </div>
</template>

<style>
.home{
  height: 800px;
}
</style>

<script>
  import chartShows from '@/components/chartShows'
  import panelGroup from '@/components/panelGroup'

  export default {
    data() {
      return {msg: '初始代模板'}
    },
    components:{
      chartShows,
      panelGroup
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
