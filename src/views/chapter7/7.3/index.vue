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
import { Chapter7 } from '@/hycom_lib/chapter7'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter8Section3 extends Vue {
  private title = '8.3输配水管道、配水管网水力平差计算（海曾—威廉公式）计算';
  private initData = {
    Q: 0.07,
    d_j: 0.3,
    C_h: 145,
    l: 135000
  };
  private data = {
    Q: '',
    d_j: '',
    C_h: '',
    l: ''
  };

  private formulas = {
    0: '$$Q :管道设计流量,m^3/s$$',
    1: '$$l :管道计算长度$$',
    2: '$$d_j :管道计算内径,m$$',
    3: '$$C_h :海曾—威廉系数Hazen Wiliams$$',
    4: '$$h_y :管道沿程水头损失,m$$'
  };

  private demoContent =
    '某供水工程,管道长135km,设计流量为0.07m^3/s,经济流速1.0m/s,经济管径0.3m,计算管道沿程水头损失.';
  private demoResult = '求得管道沿程水头损失为365.75';

  get result() {
    let values = Chapter7.spsgd(
      +this.data.Q,
      +this.data.d_j,
      +this.data.C_h,
      +this.data.l
    )
    return '管道沿程水头损失=' + values[0].toFixed(2).toString()
  }
}
</script>
