<template>
    <div>
        <Modal
            title="添加导航栏选项"
            v-model="showModal"
            @on-visible-change="resetNavModal()"
            class="navModal"
        >
            <div
                class="top"
                v-if="!isNext"
            >
                <div
                    class="itemborder" 
                    :class="{'isChoose': isChoose === '1'}"
                    @click="chooseType('1')"
                >
                    <img src="../../assets/logo.png" title="logo" width="100%">
                </div>
                <div
                    class="itemborder"
                    :class="{'isChoose': isChoose === '2'}"
                    @click="chooseType('2')"
                >
                    <img src="../../assets/bqy.png" title="标签" width="100%">
                </div>
                <div
                    class="itemborder"
                    :class="{'isChoose': isChoose === '3'}"
                    @click="chooseType('3')"
                >
                    <img src="../../assets/xllb.png" title="下拉列表" width="100%">
                </div>
                <div
                    class="itemborder" 
                    :class="{'isChoose': isChoose === '4'}"
                    @click="chooseType('4')"
                >
                    <img src="../../assets/btn.png" title="按钮" width="100%">
                </div>
            </div>
            <div v-else>
                <div
                    v-show="isChoose === '1'"
                    class="step"
                >
                    <template>
                        <Upload
                            multiple
                            type="drag"
                            action="//jsonplaceholder.typicode.com/posts/"
                        >
                            <div style="padding: 20px 0;">
                                <Icon
                                    type="ios-cloud-upload"
                                    size="52"
                                    style="color: #3399ff"
                                >
                                </Icon>
                                <p>Click or drag files here to upload</p>
                            </div>
                        </Upload>
                    </template>
                </div>
                <div
                    class="step"
                    v-show="isChoose === '2'"
                >
                    <Form
                        :model="tab"
                        label-position="right"
                        :label-width="100"
                    >
                        <FormItem label="输入标签页">
                            <Input
                                v-model="tab.bqyName"
                                placeholder="标签页名称"
                            />
                        </FormItem>
                        <FormItem label="输入跳转路由">
                            <Input
                                v-model="tab.router"
                                placeholder="（/ + 路由名称）eg：/index"
                            />
                        </FormItem>
                    </Form>
                </div>
                <div
                    class="step"
                    v-show="isChoose === '3'"
                >
                    <Form
                        :model="tab2"
                        label-position="right"
                        :label-width="100"
                    >
                        <FormItem label="输入标签页">
                            <Input
                                type="textarea"
                                :rows="6"
                                v-model="tab2.bqyName"
                                placeholder="标签页名称,用加号隔开。第一个是显示分类名称，eg：1234+1+2+3"
                            />
                        </FormItem>
                        <FormItem label="输入跳转路由">
                            <Input
                                type="textarea"
                                :rows="6"
                                v-model="tab2.router"
                                placeholder="（/ + 路由名称）eg：/index"
                            />
                        </FormItem>
                    </Form>
                </div>
                <div
                    class="step"
                    v-show="isChoose === '4'"
                >
                    <Form
                        :model="btn"
                        label-position="right"
                        :label-width="100"
                    >
                        <FormItem label="按钮名称">
                            <Input
                                v-model="btn.btnName"
                                placeholder="请输入按钮名称。eg：注册"
                            />
                        </FormItem>
                        <FormItem label="输入跳转路由">
                            <Input
                                v-model="btn.router"
                                placeholder="标签页名称,eg：1234"
                            />
                        </FormItem>
                    </Form>
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
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PageHead extends Vue {
    @Prop({ default: "xxx" })
    private show!: boolean;

    @Prop({ default: "xxx" })
    private where!: string;

    @Watch('showModal')
    private closeModal(val: boolean) {
        const that = this;
        console.log(val);
        that.$emit('update:show', val);
    }

    @Watch('show')
    private onshowChanged(val: boolean): void {
        const that = this;
        that.showModal = val;
        console.log(this.showModal)
    }

    private loading: boolean = false;

    private showModal: boolean = this.show;

    private isChoose: string = '1';

    private choose: string = '1';

    private id: number = 1;

    private tab: any = {
        bqyName: '',
        router: ''
    }

    private tab2: any = {
        bqyName: '',
        router: ''
    }

    private btn: any = {
        btnName: '',
        router: ''
    }

    private addArray: any = {};

    private isNext: boolean = false;

    private resetNavModal(type?: string) {
        if (type) {
            this.isChoose = type;
        } else {
            this.isChoose = '1';
        }
        this.tab.bqyName = '';
        this.tab.router = '';
        this.tab2.bqyName = '';
        this.tab2.router = '';
        this.btn.btnName = '';
        this.btn.router = '';
        // console.log(val);
    }

    private chooseType(type: string) {
        this.isChoose = type;
        this.resetNavModal(type);
    }

    private importNav () {
        const that = this;
        const text: any = [];
        const route: any = [];
        
        that.addArray.id = that.id;
        if (that.isChoose === '1') {
            that.addArray.text = ['https://www.baidu.com/img/flexible/logo/pc/result.png'];
            that.addArray.route = ['https://www.baidu.com/'];
        } else if (that.isChoose === '2') {
            text.push(that.tab.bqyName);
            route.push(that.tab.router);
            that.addArray.text = text;
            that.addArray.route = route;
        } else if (that.isChoose === '3') {
            that.addArray.text = that.tab2.bqyName.split('+');
            that.addArray.route = that.tab2.router.split('+');
            console.log(that.addArray.text, that.addArray.route);
        } else {
            text.push(that.btn.btnName);
            route.push(that.btn.router);
            that.addArray.text = text;
            that.addArray.route = route;
            console.log(that.addArray);
        }
        that.addArray.status = Number(that.isChoose);
        that.addArray.where = that.where;
        that.id += 1;
        console.log(that.addArray);
        that.$emit('update-nav', that.addArray);
        this.showModal = false;
        this.isNext = false;
    }

    private next() {
        this.isNext = true;
    }

    private prey() {
        this.isNext = false;
    }

}
</script>

<style lang="scss">
.navModal {
    .top {
        width: 80%;
        height: 80px;
        margin-left: 10%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        .itemborder {
            width: 80px;
            height: 80px;
            border: 1px solid #cccccc;
        }
        .isChoose {
            box-shadow:0px 0px 3px 3px skyblue;
        }
    }
    .step {
        margin-left: 10%;
        width: 80%;
    }
}

</style>