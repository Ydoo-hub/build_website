<template>
  <div id="app">
    <Menu
		class="sideber"
		active-name="1"
	>
		<div class="logo">
			<img src="./../assets/logo.png" width="40px" height="40">
		</div>
		<span class="gwgs">官网怪兽</span>
		<span class="jzzj">您的建站专家</span>
        <MenuGroup>
			<router-link to="/">
				<MenuItem name="1" class="navColor">
					<Icon type="md-contact" size="16"/>
					个人中心
				</MenuItem>
			</router-link>
			<router-link to="/choose">
				<MenuItem name="2" class="navColor">
					<Icon type="md-folder" size="16"/>
					选择模板
				</MenuItem>
			</router-link>
			<router-link to="/nav" class="navColor">
				<MenuItem name="3">
					<Icon type="md-card" size="16"/>
					页面导航
				</MenuItem>
			</router-link>
			<router-link to="/body" class="navColor">
				<MenuItem name="4">
					<Icon type="ios-home" size="16"/>
					页面主体
				</MenuItem>
			</router-link>	
			<router-link to="/bottom" class="navColor">
				<MenuItem name="5">
					<Icon type="md-list" size="16"/>
					底部信息
				</MenuItem>
			</router-link>
        </MenuGroup>
    </Menu>
	<div class="main">
    	<router-view/>
	</div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Main extends Vue {

}
</script>

<style lang="scss">
html body{
	background-color: rgb(247, 247, 247);
}

.navColor {
	color: #515a6e!important;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  .sideber {
	  padding-top: 60px;
	  position: fixed;
	  height: 100%;
	  width: 180px!important;
	  .logo {
		  position: absolute;
		  z-index: 9999;
		  top: 10px;
		  left: 10px;
	  }
	  .gwgs {
		  width: 100%;
		  position: absolute;
		  top: 10px;
		  left: 0px;
		  font-weight: 800;
		  font-size: 18px; 
	   }
	   .jzzj {
		  width: 100%;
		  position: absolute;
		  top: 32px;
		  left: 0px;
		  font-weight: 800;
		  font-size: 12px; 
	   }
	  .ivu-menu-item-group {
		  .ivu-menu-item-group-title {
			  display: none;
		  }
	  }
  }

  .main {
	  margin-left: 180px;
  }
}

</style>
