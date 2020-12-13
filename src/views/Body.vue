<template>
  	<div class="bodyBox">
		<PageHead 
			:name="headName"
		>
		</PageHead>
		<h3> 选择你需要编辑的页面： </h3>
	  	<div 
			:key="index"
			v-for="(item, index) in pageArray"
			class="urls"
		>
			<span
				class="spanlist"
				@click="choosePage()"
				:class="{'isChoose': item.id === chooseID}"
			>
				{{item.route}}
				<!-- <span
					v-if
				> </span> -->
			</span>
		</div>
	</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';


@Component({
  components: {
	PageHead
  },
})
export default class Body extends Vue {
	private headName: string = '主体部分';

	private chooseID: number = 1;

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
			route: ['/11', '/22' , '/22']
		},
	];

	private mounted() {
		this.getPageInfo;
	}

	private getPageInfo() {

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
		.spanlist {
			border: 1px solid #cccccc;
			padding: 3px 8px;
			margin: 0px 10px;
		}
		.isChoose {
			box-shadow:0px 0px 3px 3px skyblue;
		}
	}
}

</style>