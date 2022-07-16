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
export default class Chapter3Section1Sub1 extends Vue {
  private title = '3.1.1水工有压隧洞流量的计算';
  private initData = {
    '\\mu': 0.774,
    a: 6.8,
    b: 8,
    T_0: 66.9,
    h_P: 6.8
  };
  private data = {
    '\\mu': '',
    a: '',
    b: '',
    T_0: '',
    h_P: ''
  };
  private formulas = {
    0: '$$Q :流量,m^3/s$$',
    1: '$$\\mu :流量系数$$',
    2: '$$T_0 :上游水面与隧洞出口底板高程差及上游行进流量水头之和$$',
    3: '$$h_P :隧洞出口断面水流的平均单位势能$$',
    4: '$$a :出口断面洞高,m$$',
    5: '$$b :出口断面宽度,m$$',
    6: '$$P/\\gamma :出口断面平均单位压能,m,当出口端逐渐收缩使得出口段负压得以消除P/\\gamma=0.5a,当出口为淹没出流时h_P=h_s$$',
    7: '$$A :出口断面面积,m^2$$',
    8: '$$P :出口断面压强,t/m^2$$',
    9: '$$\\gamma :水的容重,t/m^3$$'
  };

  private demoContent =
    '国内某水电站,正常蓄水位1856m,汛限水位1854m,泄洪排沙底孔为有压洞,洞内径9m.工作闸门孔口尺寸8×6.8m,底板高程1793.5m,流量系数μ＝0.72,求汛期水库拉沙时的泄量.';
  private demoResult = '求得汛期水库拉沙时的泄量为1270.71';

  get result() {
    return (
      '泄量=' +
      Chapter2.sgyysdlljs(
        +this.data['\\mu'],
        +this.data.a,
        +this.data.b,
        +this.data.T_0,
        +this.data.h_P
      )
        .toFixed(2)
        .toString()
    )
  }
}
</script>
