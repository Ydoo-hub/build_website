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
		>
			<div>
				<img src="https://www.baidu.com/img/flexible/logo/pc/result.png">
			</div>
			<div>
				<a></a>
			</div>
			<div>
				<!-- 下拉列表 -->
			</div>
			<div>
				<!-- 按钮 -->
			</div>
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
	private headName = '主体部分';

	private pageArray: any = [
		{
			status: 2,
			text: ['11'],
		},
		{
			status: 3,
			text: ['数字','11','22','33'],
		},
	]
}
</script>
<style lang="scss">
.bodyBox {
	h3 {
		margin-left: 5%;
		margin-bottom: 10px;
		text-align: left;
	}
}

</style>