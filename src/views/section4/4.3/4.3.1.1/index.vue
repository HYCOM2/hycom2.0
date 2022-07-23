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
import { Chapter2 } from '@/hycom_lib/chapter2'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter3Section1Sub2 extends Vue {
  private title = '4.3.1.1 有压短管泄流能力计算';
  private initData = {
    '\\mu': 0.84,
    B: 8,
    e: 11,
    H: 56.4,
    '\\varepsilon': 0.914
  };
  private data = {
    '\\mu': '',
    B: '',
    e: '',
    H: '',
    '\\varepsilon': ''
  };

  private formulas = {
    0: '$$Q :流量,m^3/s$$',
    1: '$$\\mu :流量系数$$',
    2: '$$B :出口断面宽度,m$$',
    3: '$$e :出口断面开启高度,m$$',
    4: '$$H :由有压短管出口底板高程算起的上游水深,m$$',
    5: '$$\\varepsilon :有压短管出口的工作闸门垂直收缩系数$$'
  };

  private demoContent =
    '国内某水电站,水库校核水位1860.4m,正常蓄水位1856m,汛限水位1854m,中孔泄洪洞进水口为宜有压短管设计.有压短管出口底板高程1804m,工作闸门尺寸8m×11m,流量系数μ＝0.871,垂直收缩系数ε＝0.914,求校核洪水时中孔泄洪洞的泄量.';
  private demoResult = '求得校核洪水时中孔泄洪洞的泄量为2310.12';

  get result() {
    let values = Chapter2.yydgdwysdxlljs(
      +this.data['\\mu'],
      +this.data.B,
      +this.data.e,
      +this.data.H,
      +this.data['\\varepsilon']
    )
    return '泄量=' + values[0].toFixed(2).toString()
  }
}
</script>
