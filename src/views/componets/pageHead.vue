<template>
    <div>
        <div class="head">
            <h1>{{headName}}</h1>
        </div>
        <hr class="hrHead">
    </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

export default class Personal extends Vue {
@Prop({})
headName!: string

// @Watdc('name')
// private asd() {
//     console.log()
// }

}
</script>