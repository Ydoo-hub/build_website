<template>
    <div class="navborder">
        <div
            class="border"
            v-if="text.status === 1"
        >
            <img src='https://www.baidu.com/img/flexible/logo/pc/result.png' height="100%"/>
            <Icon type="ios-close-circle-outline" class="del" />
        </div>
        <div 
            class="border"
            v-else-if="text.status === 2"
        >
            <a>
                {{text.text[0]}}
            </a>
            <Icon type="ios-close-circle-outline" class="del" />
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
            <Icon type="ios-close-circle-outline" class="del" />
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
}
</script>

<style lang="scss">
.navborder {
    
    .border {
        margin-top: 6px;
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
}
</style>