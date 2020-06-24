<template>
    <div class="LoginPerson">
      <img src="@/assets/header.jpg" height="40" width="40" style="border-radius: 8px;cursor: pointer"/>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          <i class="el-icon-caret-bottom" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>首页</el-dropdown-item>
          <el-dropdown-item>项目地址</el-dropdown-item>
          <el-dropdown-item>docs</el-dropdown-item>
          <el-dropdown-item divided>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
</template>

<style>
  .LoginPerson{
    position: absolute;
    right: 45px;
    top:5px;
  }
  .el-icon-caret-bottom {
    cursor: pointer;
    position: absolute;
    top: -11px;
    margin-left: 4px;
    font-size: 12px !important;
  }
</style>

<script>
	export default {
	  name:'LoginPerson',
		data() {
			return {msg: 'person'}
		}
	}
</script>
