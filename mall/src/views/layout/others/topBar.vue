<template>
    <div id="topBar">
      <Hamburger @toggleClick="toggleSideBar"></Hamburger>
      <BreadCrumb></BreadCrumb>
      <LoginPerson></LoginPerson>
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
  import BreadCrumb from '@/components/BreadCrumb'
  import LoginPerson from '@/components/LoginPerson'

	export default {
		data() {
			return {msg: '初始代topbar'}
		},
    components:{
      Hamburger,
      BreadCrumb,
      LoginPerson
    },
    methods:{
      toggleSideBar(){
        this.$store.commit('spreadMenu')
      }
    }
	}
</script>
