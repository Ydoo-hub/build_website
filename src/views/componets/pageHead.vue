<template>
    <div>
        <div class="head">
            <h1>{{name}}</h1>
        </div>
        <hr class="hrHead">
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {
  }
})
export default class PageHead extends Vue {

    @Prop({ default: "xxx" })
    private name!: string;

}
</script>