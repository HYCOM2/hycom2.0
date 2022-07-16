<template>
  <div>
    <hycom-form
      :title="title"
      :data="data"
      :init-data="initData"
      :result="result"
      :demo-content="demoContent"
      :demo-result="demoResult"
      :formulas="formulas"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Chapter6 } from '@/hycom_lib/chapter6'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter7Section3Sub4 extends Vue {
  private title = '7.3.4判断直接水锤和间接水锤';
  private initData = {
    L: 309.9,
    C: 619.05,
    T_s: 11
  };
  private data = {
    L: '',
    C: '',
    T_s: ''
  };

  private formulas = {
    1: '$$C :水锤波速,m/s$$',
    2: '$$L :管道长度,m$$',
    3: '$$T_s :有效开阀时间,s$$',
    4: '$$t_r :水锤波在钢管中来回传播一次所用的时间$$'
  };

  private demoContent =
    '某水电站的基本资料同上例,最长的1#管道长度263.1m,水轮机有效关闭时间11s,发生直接水锤还是间接水锤.';
  private demoResult = '发生间接水锤';

  get result() {
    let value = Chapter6.pdzjschjjsc(
      +this.data.L,
      +this.data.C,
      +this.data.T_s
    )
    return value.toString()
  }
}
</script>
