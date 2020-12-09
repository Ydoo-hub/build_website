<template>
  <div>
      <pageHead
        :headName="headName"
      >
      </pageHead>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import pageHead from '@/views/componets/pageHead.vue';

@Component({
  components: {
    pageHead
  },
})
export default class Personal extends Vue {
private headName: string = "个人中心"

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


</style>
