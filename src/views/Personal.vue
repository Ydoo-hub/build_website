<template>
  <div>
      <PageHead 
        :name="headName"
      >
      </PageHead>
      <div class="titlebox" >
        <span class="title"> 个人账户信息： </span>
        <Button
          @click="showEditAccountModal()"
        >
          修改信息
        </Button>
        <span> (可以对个人账号密码进行修改) </span>
      </div>
      <EditAccount
        :show.sync="show"
      ></EditAccount>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import PageHead from '@/views/componets/pageHead.vue';
import EditAccount from '@/views/componets/EditAccount.vue';
// import { login } from '@/api/admin.ts'

@Component({
  components: {
    PageHead,
    EditAccount
  },
})
export default class Personal extends Vue {
  private headName: string = "个人中心";

  private show: boolean = false;

  private showEditAccountModal() {
    // const data: any = {
    //   username: '123',
    //   password: '323456'
    // }
    // login(data)
    //   .then((res: any) => {
    //     console.log(res);
    //   })
    //   .catch((err: any) => {
    //     console.log(err);
    //   })
    this.show = true;
  }
}
</script>

<style lang="scss">
.head {
	padding-top: 20px;
}

.hrHead {
  width: 90%;
  margin: 20px auto ;
}



.titlebox {
  width: 90%;
  padding-left: 5%;
  text-align:left;

  .title {
    font-size: 16px;
    font-weight: 600;
  }
  Button {
    margin:0 16px;
  }
  .tiptext {
    font-size: 12px;
    color: #ccc;
  }
}


</style>
