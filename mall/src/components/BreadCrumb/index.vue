<template>
    <div class="BreadCrumb">
      <el-breadcrumb class="app-breadcrumb" separator="/">
        <template v-for="(item,index) in levelList">
          <el-breadcrumb-item :key="item.key" :to="{ path : item.path }" style="cursor: pointer">{{ item.meta.title }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
</template>

<style>
    .BreadCrumb{
      position: absolute;
      top: 17px;
      left: 61px;
    }
</style>

<script>
	export default {
	  name:'BreadCrumb',
		data() {
			return {
			  msg: '初始代模板',
        levelList:null
			}
		},
    created(){
      this.getBreadcrumb()
    },
    watch:{
	    $route(to,from){
        this.getBreadcrumb()
      }
    },
    methods:{
      getBreadcrumb() {
        console.log(this.$route.matched);
        let matched = this.$route.matched.filter(item => item.name)
        console.log("matched");
        console.log(matched);
        const first = matched[0]
        if (first && first.name !== 'home') {
          matched = [{ path: '/home', meta: { title: '首页' }}].concat(matched)
        }
        this.levelList = matched
      }
    }
	}
</script>
