<template>
    <div id="topBar">
      <Hamburger @toggleClick="toggleSideBar"></Hamburger>
    </div>
</template>

<style>
  #topBar{
    height: 50px;
    overflow:hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0,21,41,.08);
  }
</style>

<script>
  import Hamburger from '@/components/Hamburger'

	export default {
		data() {
			return {msg: '初始代topbar'}
		},
    components:{
      Hamburger
    },
    methods:{
      toggleSideBar(){
        this.$store.commit('increment')
      }
    }
	}
</script>
