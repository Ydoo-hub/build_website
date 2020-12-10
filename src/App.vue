<template>
  <div id="app">
	<Login v-if="isLogin">
	</Login>
    <Main v-else></Main>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Main from '@/views/Main.vue';
import Login from '@/views/Login.vue';


@Component({
  components: {
	Main,
	Login
  },
})
export default class  extends Vue {
	private isLogin: boolean = false;
}
</script>
