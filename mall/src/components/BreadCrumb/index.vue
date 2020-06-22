<template>
    <el-breadcrumb class="app-breadcrumb" v-for="(item,index) in levelList" >
        <el-breadcrumb-item :key="item.key">item</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<style>
    body {
        background-color: green;
    }
</style>

<script>
	export default {
		data() {
			return {
			  msg: '初始代模板',
        levelList:null
			}
		}
	}
</script>
