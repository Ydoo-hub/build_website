<template>
  <div>
      <PageHead 
        :name="headName"
      >
      </PageHead>
      <div>
			<p v-if="true">您还未有已定制好的页面，请前往<a>定制</a>再回来选择噢！</p>
			<div class="choose">
				<div>
					<div class="showChoose">
						<!-- < 移入的时候显示选择和浏览 > -->
					</div>
					<p>123456</p>
				</div>
			</div>
      </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';

@Component({
  components: {
    PageHead
  },
})
export default class Choose extends Vue {
  private headName: string = '模板选择';
}
</script>
<style lang="scss">
.head {
	padding-top: 20px;
}

.choose {
	min-width: 760px;
	max-width: 90%;
	margin-left: 5%;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
	.showChoose {
		width: 200px;
		height: 300px;
		margin:20px;
		border-width: 2px;
		border-style: solid;
		border-color: black;

	}
}

</style>