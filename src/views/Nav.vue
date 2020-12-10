<template>
  <div class="nav">
      <div>
        <PageHead 
          :name="headName"
        >
        </PageHead>
		<h3> 导航栏模板： </h3>
		<div class="dh">
			<img src='../assets/noPic.png'>
			<a> 首页 </a>
			<a> 视频介绍 </a>
			<a> 公司简介 </a>
			<a> 价格方案 </a>
			<div class="right">
				<Button> 登录 </Button>
				<Button> 注册 </Button>
			</div>
		</div>
		<h3> 编辑您的导航栏： </h3>
		<div class="editdh">
	        <div class="leftdh">
				<div> <!-- 这里价格v-for遍历结果 -->
					<EidtNav
						:text="aaaa"
					>
					</EidtNav>
				</div>
				<div> <!-- 这里价格v-for遍历结果 -->
					<EidtNav
						:text="bbbb"
					>
					</EidtNav>
				</div>
				<Icon 
					type="ios-add-circle-outline"
					size="40"
					color="rgb(61,92,237)"
				/>
	        </div>
			<div class="rightdh">
				
				<Icon 
					type="ios-add-circle-outline"
					size="40"
					color="rgb(61,92,237)"
				/>
			</div>
		</div>
      </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';
import EidtNav from '@/views/componets/EditNav.vue';
// import { login } from '@/api/admin.ts'

@Component({
  components: {
	PageHead,
	EidtNav
  },
})
export default class Personal extends Vue {
	private headName: string = "页面导航";

	private aaaa: {} = {
		status: 2,
		text: ['1234']
	}

	private bbbb: {} = {
		status: 3,
		text: ['1234','1','2','3','4']
	}

}
</script>

<style lang="scss">
.nav{
	h3 {
		margin-left: 5%;
		margin-bottom: 10px;
		text-align: left;
	}
	.dh {
		border: 1px solid #cccccc;
		width: 90%;
		margin-left: 5%;
		margin-bottom: 30px;
		height: 80px;
		padding: 6px 20px;
		text-align: left;
		img {
			height: 100%;
		}
		a {
			position: relative;
			top: -26px;
			margin: 10px;
			font-size: 14px;
		}
		.right {
			float: right;
			Button {
				position: relative;
				margin-top: 20px;
				margin-right: 10px;
			}
		}
	}
	hr {
		width: 90%;
		margin-left: 5%;
		margin-bottom: 30px;
	}
	.editdh {
		border: 1px solid #cccccc;
		width: 90%;
		margin-top: 10px;
		margin-left: 5%;
		height: 80px;
		padding: 6px 20px;
		display: flex;
		.leftdh {
			width: 75%;
			padding-top: 12px;
			display: flex;
			justify-content: flex-start;
			// div {
			// 	padding-top: 10px;
			// }
		}
		.rightdh {
			width: 25%;
			padding-top: 12px;
			display: flex;
			justify-content: flex-end;
		}

	}
}
</style>