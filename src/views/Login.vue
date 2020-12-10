<template>
  <div class="loginPage">
    <div class='login'>
        <h2>官网怪兽 · 登录</h2>
        <Form 
            :model="loginInfo"
            :rules="ruleValidate"    
        >
            <FormItem 
                label="账号" 
                class="labal"
                prop="name"
            >
                <Input v-model="loginInfo.name" />
            </FormItem>
            <FormItem
                label="密码"
                class="labal"
                prop="password"
            >
                <Input
                    type="password"
                    v-model="loginInfo.password" 
                />
            </FormItem>
            <a>
                <Poptip 
                    content="忘记密码请联系客服 184-2001-2001" 
                    placement="bottom"
                >
                    忘记密码?
                </Poptip>
            </a>
        </Form>
        <div class="LoginBottom">
            <Checkbox
                v-model="loginInfo.status"
                style="position: absolute;left:0px"
            >
                保持我的登录状态
            </Checkbox>
            <br>
            <Button type="primary">登录</Button>
        </div>
    </div>
    <div class="logo">
        <div class="loginLogo">
            <img src="../assets/logo.png"/>
            <p class="loginTip">您的建站专家，为您提供最便捷的建站流程</p>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { validateLoginName, validatePassword } from '../libs/validate.ts'

@Component({
  components: {
    // Bottom
  },
})
export default class Personal extends Vue {
    private loginInfo: any = {
        name: '',
        password: '',
        status: false
    }

    private ruleValidate: any = {
        name: [
            { validator: validateLoginName(this.loginInfo), trigger: 'blur' }
        ],
        password: [
            { validator: validatePassword(this.loginInfo), trigger: 'blur' }
        ],
    }

}
</script>

<style lang="scss">
.labal {
    .ivu-form-item-label{
        background: white;
        position: relative;
        top: 8px;
        left: 10px;
        z-index: 999;
        padding: 0px 3px!important;
    }
}

.loginPage {
    width: 100%;
    display: flex;
    height: 100%;
    position: fixed;
    flex-direction: row;
    justify-content: flex-start;
    .login {
        padding: 6% 70px;
        min-width: 400px;
        width: 40%;
        height: 100%;
        background: white;
        h2 {
            // display: block;
            // line-height: 0px;
            // left: 0px;
            text-align: left;
        }
        Form {
            margin-top: 20px;
            position: relative;
            a {
                font-size: 12px;
                position: absolute;
                right: 0px;
                top: 126px;
            }
        }
        .LoginBottom {
            margin-top: 60px;
            position: relative;
            Button {
                margin-top: 10px;
                background: #2e4fed;
                width: 100%;
            }
        }
    }
    .logo {
        width: 60%;
        // background-image: linear-gradient(-90deg, #29bdd9 0%, #276ace 100%);
        background: rgb(68,97,237);
        .loginLogo {
            margin-top: 10%;
            P {
                font-size: 28px;
                font-weight:900px;
                line-height: 90px;
                color: black;
            }
        }
    }
}

</style>
