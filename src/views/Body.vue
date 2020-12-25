<template>
  	<div class="bodyBox">
		<PageHead 
			:name="headName"
		>
		</PageHead>
		<h3> 选择你需要编辑的页面： </h3>
		<div
			class="urls"
		>
			<div 
				:key="index"
				v-for="(item, index) in routerArray"
			>
				<span
					class="spanlist"
					@click="choosePage(item)"
					:class="{'isChoose': item === chooseRouter}"
				>
					{{item}}
				</span>
			</div>
		</div>
		<hr class="hrHead">
		<h3> 路由：{{chooseRouter}} </h3>
	  	<!-- <div>
			<div
				:key="index"
				v-for="(item, index) in blocklist"
			>
				{{blocklist[item]}}
			</div>  
		</div>
		<EidtBodyModel>
		</EidtBodyModel> -->
		<BlockList
			:chooseRouter="chooseRouter"
		>
		</BlockList>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';
import BlockList from '@/views/componets/BlockList.vue';


@Component({
  components: {
	PageHead,
	BlockList
  },
})
export default class Body extends Vue {
	private headName: string = '主体部分';

	private chooseRouter: string = '/11';

	private pageArray: any = [
		{
			id: 1,
			status: 2,
			text: ['11'],
			route: ['/11']
		},
		{
			id: 2,
			status: 3,
			text: ['数字','11','22','33'],
			route: ['/11', '/22' , '/32']
		},
	];

	private blocklist: any = [];

	private routerArray: any = [];

	private mounted() {
		this.getPageInfo();
	}

	private getPageInfo() {
		for (const item in this.pageArray) {
			for (const child in this.pageArray[item].route) {
				this.routerArray.push(this.pageArray[item].route[child]);
			}
		}
		// console.log(this.routerArray);
		this.routerArray = Array.from(new Set(this.routerArray));
	}

	private choosePage(router: string) {
		this.chooseRouter = router;
	}
}
</script>
<style lang="scss">
.bodyBox {
	h3 {
		margin-left: 5%;
		margin-bottom: 10px;
		text-align: left;
	}
	.urls {
		display: flex;
		margin-left: 5%;
		margin-bottom: 20px;
		.spanlist {
			border: 1px solid #cccccc;
			padding: 3px 8px;
			margin: 0px 10px;
			cursor:pointer;
		}
		.isChoose {
			box-shadow:0px 0px 3px 3px skyblue;
		}
	}
}

</style>