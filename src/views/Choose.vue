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
					<div
						class="showChoose"
					>
						<!-- < 移入的时候显示选择和浏览 > -->
						<a>
							<div class="mask">
								<span class="spantext" :class="{ 'shadow': isChoose }">
									<!-- <Icon type="md-arrow-dropright-circle" size="48"/> -->
									<span> 选择 </span>
									<span> 浏览 </span>
								</span>
							</div>
						</a>
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
		position: relative;
	}
}
.showChoose .mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(44, 44, 44, 0.2);
    color: #ffffff;
    opacity: 0;
    display: flex;
    font-size: 13px;
    /* 转换速度 */
    transition: transform 1s ease;
}

.mask .spantext {
    margin: auto;
}

.showChoose a:hover .mask {
    opacity: 1;
}

</style>