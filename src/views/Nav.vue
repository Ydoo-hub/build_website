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
				<Dropdown>
					<a href="javascript:void(0)">
						1234
						<Icon type="ios-arrow-down"></Icon>
					</a>
					<DropdownMenu slot="list">
						<DropdownItem>
							1
						</DropdownItem>
						<DropdownItem>
							2
						</DropdownItem>
						<DropdownItem>
							3
						</DropdownItem>
						<DropdownItem>
							4
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<div class="right">
					<Button> 登录 </Button>
					<Button> 注册 </Button>
				</div>
			</div>
			<h3> 编辑您的导航栏： </h3>
			<div class="editdh">
				<div class="leftdh">
					<div
						:key="index"
						v-for="(item, index) in editArray"
					> <!-- 这里价格v-for遍历结果 -->
						<EidtNav
							@del="del($event)"
							:text="item"
							v-if ="item.where === 'left'"
						>
						</EidtNav>
					</div>
					<Icon 
						type="ios-add-circle-outline"
						size="40"
						color="rgb(61,92,237)"
						class="addNav"
						@click="showNavChooseModal('left')"
					/>
				</div>
				<div class="rightdh">
					<Icon 
						type="ios-add-circle-outline"
						size="40"
						color="rgb(61,92,237)"
						class="addNav"
						@click="showNavChooseModal('right')"
					/>
					<div
						:key="index"
						v-for="(item, index) in editArray"
					>
						<EidtNav
							@del="del($event)"
							:text="item"
							v-if ="item.where === 'right'"
						>
						</EidtNav>
					</div>
				</div>
			</div>
			<ShowNavChooseModal
				:show.sync="show"
				:where="where"
				@update-nav="updateNav($event)"
			>
			</ShowNavChooseModal>
		</div>
		<Button
			type="primary"
			class="save"
		>
			保存
		</Button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';
import EidtNav from '@/views/componets/EditNav.vue';
import ShowNavChooseModal from '@/views/componets/ShowNavChooseModal.vue';

// import { login } from '@/api/admin.ts'

@Component({
  components: {
	PageHead,
	EidtNav,
	ShowNavChooseModal
  },
})
export default class Personal extends Vue {
	private headName: string = "页面导航";

	private editArray: any = [];

	private show: boolean = false;

	private where: string = 'left';

	private showNavChooseModal(where: string) {
		this.where = where;
		this.show = true;
	}

	private del(msg: any) {
		for(const item in this.editArray){
			if (this.editArray[item].id === msg) {
				this.editArray.splice(item,1);
			}
		}
	}

	private updateNav (msg: any) {
		this.editArray.push(msg);
		this.editArray = JSON.parse(JSON.stringify(this.editArray));
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
			// padding-top: 12px;
			display: flex;
			justify-content: flex-start;
			// div {
			// 	padding-top: 10px;
			// }
		}
		.rightdh {
			width: 25%;
			display: flex;
			justify-content: flex-end;
		}

	}
	div {
		.addNav {
			margin-top: 13px;
			cursor: pointer;
		}
	}
	.save {
		position: fixed;
		bottom: 20px;
		left: calc(50% + 60px);
	}
}
</style>