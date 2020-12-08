<template>
    <Modal
        title="修改个人信息"
        v-model="showModal"
        @on-visible-change="resetFrom()"
        :loading="loading"
    >
        <Form 
            ref="accountForm"
            :model="accountForm"
            label-position="right"
            :label-width="100"
            :rules="ruleValidate"
        >
            <FormItem
                prop="oldPassword"
                label="请输入旧密码"
            >
                <Input type="password" placeholder="请输入旧密码" v-model="accountForm.oldPassword" />
            </FormItem>
            <FormItem
                prop="newPassword"
                label="新密码"
            >
                <Input type="password" placeholder="请输入新密码" v-model="accountForm.newPassword" />
            </FormItem>
            <FormItem
                prop="newPasswordAgain"
                label="验证新密码"
            >
                <Input type="password" placeholder="请再次输入新密码" v-model="accountForm.newPasswordAgain" />
            </FormItem>
        </Form>
        <div slot="footer">
            <Button
                type="primary"
                :loading="loading"
                @click="editAcc"
            >
                确定
            </Button>
        </div>
    </Modal>
</template>
<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { validateOldPassword, validateNewPassword, validateNewPasswordAgain } from '../../libs/validate.ts'
@Component({
  components: {
  }
})
export default class PageHead extends Vue {
    @Prop({ default: "xxx" })
    private name!: string;

    @Prop({})
    private show!: boolean;

    private showModal: boolean = this.show;

    @Watch('show')
    private onshowChanged(val: boolean): void {
        const that = this;
        that.showModal = val;
    }

    @Watch('showModal')
    private onshowModalChanged(val: boolean): void {
        const that = this;
        that.$emit('update:show', val);
    }

    private accountForm: any = {
        oldPassword: '',
        newPassword: '',
        newPasswordAgain: ''
    }

    private loading: boolean = false;

    private ruleValidate: any = {
        oldPassword: [
            { validator: validateOldPassword(this.accountForm), trigger: 'blur' }
        ],
        newPassword: [
            { validator: validateNewPassword(this.accountForm), trigger: 'blur' }
        ],
        newPasswordAgain: [
            { validator: validateNewPasswordAgain(this.accountForm), trigger: 'blur' }
        ]
    }

    private editAcc() {
        this.loading = true;
        (this.$refs['accountForm'] as any).validate((valid: any) => {
            console.log('sss');
            // 这里接口请求成功就可以 loading = false；
            if (valid) {
                this.$Message.success('Success!');
            }
        })
    }

    private resetFrom(val: any) {
        if (!val) {
            this.accountForm.oldPassword = '';
            this.accountForm.newPassword = '';
            this.accountForm.newPasswordAgain = '';
        }
    }
}
</script>