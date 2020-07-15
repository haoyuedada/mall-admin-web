<template>
    <el-scrollbar ref="scrollContainer" class="scroll-container" :vertical="false">
      <slot></slot>
    </el-scrollbar>
</template>

<script>
	export default {
		name: "ScrollPane",
    data(){
		  return {

      }
    },

	}
</script>

<style scoped>

</style>
