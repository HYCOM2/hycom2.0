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
import { Chapter4 } from '@/hycom_lib/chapter4'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter5Section5 extends Vue {
  private title = '5.5底流消能水跃长度计算';
  private initData = {
    E: 0,
    Q: 2253,
    b: 15,
    H_0: 83.216
  };
  private data = {
    E: '',
    Q: '',
    b: '',
    H_0: ''
  };

  private formulas = {
    0: '$$L :护坦长度,m$$',
    1: '$$h_1 :跃前共轭水深,m$$',
    2: '$$h_2 :跃后共轭水深,m$$',
    3: '$$F_{r1} :跃前断面佛劳德数$$',
    4: '$$Q :流量,m^3/s$$',
    5: '$$H_0 :计入上游水流行进流速v_0,以下游收缩断面处为基准面上游的水头,m$$',
    6: '$$E :以下游收缩断面处为基准面的泄水建筑物的水头（不计入上游水流行进流速v_0）,m$$',
    7: '$$v_1 :跃前断面流速,m/s$$',
    8: '$$b :消力池宽度,m$$'
  };

  private demoContent =
    '某水电工程,水流沿溢流堰进入消力池,消力池进口宽15m,底板高程1778m,水库校核水位为1860.4m,泄量为2253m3/s,下游水位1793.87m,计算水跃长度.';
  private demoResult = '求得水跃长度为143.50';

  get result() {
    let values = Chapter4.dlxnsljs(
      +this.data.E,
      +this.data.Q,
      +this.data.b,
      +this.data.H_0
    )
    let outStr = ''
    if (values.length !== 1) {
      // outStr+="跃后共轭水深:"+values[1].toFixed(2).toString()+"|跃前断面佛劳德数:"+values[2].toFixed(2).toString()+"|护坦长度:"+values[3].toFixed(2).toString()
      outStr += '水跃长度:' + values[3].toFixed(2).toString()
    }

    return outStr
  }
}
</script>
