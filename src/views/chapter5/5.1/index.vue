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
import { Chapter5 } from '@/hycom_lib/chapter5'
import { shapeType } from '@/hycom_lib/common'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter6Section1 extends Vue {
  private title = '6.1明渠均匀流水力计算';
  private initData = {
    断面形状: shapeType.RECTANGLE,
    b: 2,
    i: 0.002,
    n_z: 0.015,
    Q: 10,
    m: 1.25
  };
  private data = {
    断面形状: '',
    b: '',
    i: '',
    n_z: '',
    Q: '',
    m: ''
  };

  private formulas = {
    0: '$$Q :流量,m^3/s$$',
    1: '$$A :渠道过流断面面积,m^2$$',
    2: '$$x :湿周,m$$',
    3: '$$R :水力半径,m$$',
    4: '$$B :梯形渠道水面宽度,m$$',
    5: '$$b :梯形渠道底部宽度或矩形断面宽度,m$$',
    6: '$$m :边坡系数$$',
    7: '$$h :水深,m$$',
    8: '$$n_z :糙率$$',
    9: '$$i :泄槽底坡$$'
  };

  private demoContent =
    '某灌溉渠道设计流量10m3/s,砼衬砌,糙率为0.015,初拟底坡0.002,初拟断面矩形,底宽为2m,求断面水深及流速.如果初拟断面为梯形,边坡系数1.25,求水深及流速.';
  private demoResult =
    '以梯形断面为例,水深为1.33,流速为2.05.以矩形断面为例,水深为2.69,流速为1.86.';

  get result() {
    let values = Chapter5.mqjyls(
      +this.data.断面形状,
      +this.data.b,
      +this.data.i,
      +this.data.n_z,
      +this.data.Q,
      +this.data.m
    )
    let outStr = ''
    outStr +=
      '水深:' +
      values[0].toFixed(2).toString() +
      '|流速:' +
      values[1].toFixed(2).toString()
    return outStr
  }
}
</script>
