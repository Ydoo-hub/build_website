<template>
    <Modal
		v-model="modelShow"
		@on-visible-change="reset()"
		title="编辑页面主体"
		class="eidtbody"
		labelWidth="400px"
	>
        <div
			v-if="!isNext"
			class="chooseBody"
		>
			<div
				class="item"
				 :class="{'isChoose': isChoose === '1'}"
                @click="chooseType('1')"
			>
				图文 ： 左图右文
			</div>
			<div
				class="item"
				 :class="{'isChoose': isChoose === '2'}"
                @click="chooseType('2')"
			>
				图文 ： 上图下文
			</div>
			<div
				class="item"
				:class="{'isChoose': isChoose === '3'}"
                @click="chooseType('3')"
			>
				logo友链
			</div>
			<div
				class="item"
				:class="{'isChoose': isChoose === '4'}"
            	@click="chooseType('4')"
			>
				轮播图
			</div>
			<div
				class="item"
				:class="{'isChoose': isChoose === '5'}"
                @click="chooseType('5')"
			>
				静态图
			</div>
			<div
				class="item"
				:class="{'isChoose': isChoose === '6'}"
                @click="chooseType('6')"
			>
				表单
			</div>
		</div>
		<div
			v-else
		>
			<div
				v-if="isChoose === '1' || isChoose === '2' || isChoose === '3' || isChoose === '4'"
			>
				<Select
					v-model="model1"
					style="width:200px"
					@on-change="ccc()"
				>
					<Option value="1">每行1列</Option>
					<Option value="2">每行2列</Option>
					<Option value="3">每行3列</Option>
					<Option value="4">每行4列</Option>
					<Option value="5">每行5列</Option>
					<Option value="6">每行6列</Option>
				</Select>
			</div>
		</div>
		<div slot="footer">
			<Button
				type="primary"
				@click="next()"
				v-if="!isNext"
			>
				下一步
			</Button>
			<Button
				@click="prey()"
				v-if="isNext"
			>
				上一步
			</Button>
			<Button
				type="primary"
				:loading="loading"
				@click="importNav()"
				v-if="isNext"
			>
				确定
			</Button>
		</div>
    </Modal>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
@Component({
  components: {
  }
})
export default class EidtBodyModel extends Vue {
	@Prop({ default: "xxx" })
	private show!: boolean;

	@Watch('show')
	private watchShow(val: boolean) {
		const that = this;
        that.modelShow = val;
	}

	@Watch('modelShow')
	private whatcModelShow(val: boolean) {
		this.$emit('update:show',val)
	}

	private modelShow: boolean = this.show;

	private isChoose: string = '1';

	private isNext: boolean = false;

	private model1: string = '1';

	private loading: boolean = false

	private chooseType(type: string) {
		this.isChoose = type;
	}

	private reset(){
		// this.$emit('update:show', val)
		this.isChoose = '1';
	}

	private next() {
		this.isNext = true;
	}

	private prey() {
		this.isNext = false
	}

	private ccc() {
		// console.log(this.model1)
	}

}
</script>

<style lang="scss">
.eidtbody{
	.chooseBody {
		width: 80%;
		display: flex;
		justify-content: space-between;
		margin-left: 10%;
		flex-wrap: wrap;
		.item {
			width: 80px;
			height: 80px;
			border: 1px solid #cccccc;
			margin-bottom: 20px;
		}
		.isChoose {
            box-shadow:0px 0px 3px 3px skyblue;
        }
	}
}
</style>