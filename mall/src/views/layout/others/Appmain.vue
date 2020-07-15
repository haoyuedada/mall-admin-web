<template>
    <div class="Appmain">
      <router-view></router-view>
    </div>
</template>

<style>
.Appmain{
  background-color: #f0f2f5;
  position: relative;
  height: 90%;
}
</style>

<script>
	export default {
    name: 'AppMain',
		data() {
			return {msg: '初始代模板'}
		}
	}
</script>
