<template>
    <div class="navborder">
        <div
            class="borderImg"
            v-if="text.status === 1"
        >
            <img src='https://img-blog.csdnimg.cn/20181116160709588.png' height="96%"/>
            <Icon
                type="ios-close-circle-outline"
                class="del"
                @click="delNav()"
            />
        </div>
        <div 
            class="border"
            v-else-if="text.status === 2"
        >
            <a>
                {{text.text[0]}}
            </a>
            <Icon
                type="ios-close-circle-outline"
                class="del"
                @click="delNav()"
            />
        </div>
        <div 
            class="border"
            v-else
        >
            <Dropdown>
                <a href="javascript:void(0)">
                    {{text.text[0]}}
                    <Icon type="ios-arrow-down"></Icon>
                </a>
                <DropdownMenu slot="list">
                    <DropdownItem
                        :key="item"
                        v-for="item in text.text"
                    >
                        {{item}}
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <Icon
                type="ios-close-circle-outline"
                @click="delNav()"
                class="del"
            />
        </div>
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class EditNav extends Vue {
    @Prop({ default: "xxx" })
    private text!: {};

    private mounted() {
        console.log(this.text);
    }

    private delNav() {
        const that: any = this;
        console.log('this',that.text.id)
    }
}
</script>

<style lang="scss">
.navborder {
    
    .border {
        margin-top: 20px;
        padding: 3px 8px;
        border: 1px solid #cccccc;
        margin-right: 10px;
        position: relative;
        border-radius: 6px;
        .del {
            color: red;
            font-weight: 800;
            position: absolute;
            top: -6px;
            right: -8px;
        }
    }
    .borderImg {
        padding: 3px 8px;
        border: 1px solid #cccccc;
        margin-right: 10px;
        position: relative;
        border-radius: 6px;
        height: 66px;
        .del {
            color: red;
            font-weight: 800;
            position: absolute;
            top: -6px;
            right: -8px;
        }
    }
}
</style>