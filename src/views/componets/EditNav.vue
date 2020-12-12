<template>
    <div class="navborder">
        <div
            class="borderImg"
            v-if="text.status === 1"
        >
            <img :src="imgUrl" height="96%"/>
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
            v-else-if="text.status === 3"
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
        <div 
            class="border"
            style="margin-top:14px"
            v-else
        >
            <Button>
                {{text.text[0]}}
            </Button>
            <Icon
                type="ios-close-circle-outline"
                class="del"
                @click="delNav()"
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

    private imgUrl: any = '';

    private created() {
        // console.log(this.text.text);
        const that = this
        that.imgUrl = (that.text as any).text[0]
    }

    private delNav() {
        const that: any = this;
        that.$emit('del', that.text.id);
    }
}
</script>

<style lang="scss">
.navborder {
    
    .border {
        padding: 3px 8px;
        border: 1px solid #cccccc;
        margin: 0px 5px;
        margin-top: 20px;
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