<template>
  	<div
        class="blocklist"  
    >
        <div
            class="item"
            :key="index"
            v-for="(item, index) in blocklist"
        >
        <!-- <div
            class="item"
        > -->
            图文，左图右文
            <Icon
                class="icon1"
                type="md-create"
                title="编辑"
            />
            <Icon
                class="icon2"
                type="md-backspace"
                title="删除"
            />
        </div>
        <div
            class="add"
            @click="showEidtBodyModel()"
        >
            <Icon
                class="icon"
                type="md-add"
            />
        </div>
        <EidtBodyModel
            :show.sync="show"
        >
        </EidtBodyModel>

    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import EidtBodyModel from '@/views/componets/EidtBodyModel.vue';


@Component({
  components: {
	EidtBodyModel
  },
})
export default class BlockList extends Vue {
    @Prop()
    private chooseRouter!: string;

	private blocklist: any = [];

    private routerArray: any = [];
    
    private show: boolean = false;

    private showEidtBodyModel() {
        this.show = true;
    }

}
</script>
<style lang="scss">
.blocklist{
    margin-left: 5%;
    width: 40%;
    min-width: 300px;
    min-height: 240px;
    border: 1px solid #cccccc;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    border-radius: 4px;
    padding-top: 3px;
    .item{
        width: 98%;
        margin: 3px 1%;
        padding: 6px 12px;
        border:1px solid skyblue;
        text-align: left;
        position: relative;
        border-radius: 4px;
        .icon1{
            position: absolute;
            font-size: 20px;
            color:steelblue;
            right: 40px;
            cursor: pointer;
        }
        .icon2{
            position: absolute;
            font-size: 20px;
            color: red;
            right: 14px;
            cursor: pointer;
        }
    }
    .item:hover{
        background: azure;
    }
    .add{
        margin: 3px 1%;
        padding: 6px 12px;
        border:1px solid skyblue;
        border-radius: 4px;
    }
    .add:hover {
        background: paleturquoise;
        cursor: pointer;
    }
}

</style>