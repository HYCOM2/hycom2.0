<template>
  <div>
    <h3>参数说明:</h3>
    <br>
    <vue-paramaters :formulas="formulas" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import VueParamaters from '@/components/VueParamaters/index.vue'
import MathJax3 from '@/components/MathJax3/index.vue'

@Component({
  components: {
    VueParamaters,
    MathJax3
  }
})
export default class ParamExplain extends Vue {
  @Prop() formulas!: Object;
}

</script>
