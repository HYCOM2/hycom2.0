<!--
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2022-06-11 21:44:21
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-06-12 15:03:28
 * @FilePath: \hycom_app\src\views\section2\2.6\2.6.2\index.vue
 * @Description:
 * Copyright (c) 2022 by Xu.WANG raymondmgwx@gmail.com, All Rights Reserved.
-->
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
    >
      <div slot="table_fir_anchor">
        <h3>掺气点位置与台阶高度和临界水深函数关系图(图2.6.6):</h3>
        <br>
        <LineChart />
      </div>
    </hycom-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Chapter2 } from '@/hycom_lib/chapter2'

import HycomForm from '@/components/HycomForm/index.vue'
import LineChart from './components/LineChart.vue'

@Component({
  components: {
    HycomForm,
    LineChart
  }
})
export default class Chapter2Section6Sub2 extends Vue {
  private title = '2.6.2南京水利科学研究院方法计算';
  private initData = {
    Q: 25.12,
    h: 0.9,
    H_堰: 50,
    H: 1.7,
    b: 8
  };
  private data = {
    Q: '',
    h: '',
    H_堰: '',
    H: '',
    b: '',
    '\\frac{L1}{h}': ''
  };

  private formulas = {
    0: '$$L_1: 从堰顶算起至掺气点的长度,m$$',
    1: '$$L_2: 出现均匀流掺气水流的距离,m$$',
    2: '$$d_0: 均匀掺气水流的水深,m$$',
    3: '$$v_0: 均匀掺气流平均流速,m/s$$',
    4: '$$H_堰: 堰高,m$$',
    5: '$$H: 堰上水头,m$$',
    6: '$$q: 单宽流量,m^3/s-m$$',
    7: '$$d_c: 临界水深 m$$',
    8: '$$h: 台阶的步高 m $$',
    9: '$$b: 溢流泄槽宽度$$'

  };

  private demoContent = '某碾压混凝土(RCC)重力坝,最大坝高50m,坝顶宽8m,下游坝坡设置台阶消能工,每个台阶步高0.9m、步长0.72m,单宽流量3.14m^3/s-m,堰上水头1.7m,计算台阶消能工初始掺气点位置、水深、流速及均匀掺气断面位置、水深、流速、消能效率。';
  private demoResult = '求得L1=11.25; L2=14.4677; d0=0.5994; v0=5.2386; eta=0.9832';

  private curve266(x:number) {
    return -0.04470359 * Math.pow(x, 5) + 0.74138603 * Math.pow(x, 4) - 3.45303124 * Math.pow(x, 3) + 7.83388746 * Math.pow(x, 2) - 2.07367457 * x + 7.20028475
  }

  @Watch('data.Q')
  @Watch('data.b')
  @Watch('data.h')
  public onVarQChange() {
    if (this.data.b !== '' && this.data.Q !== '' && this.data.h !== '') {
      let q = +this.data.Q / +this.data.b
      let dcDivH = Math.pow(q * q / 9.8, 1 / 3) / +this.data.h
      this.data['\\frac{L1}{h}'] = this.curve266(dcDivH).toString()
    }
  }

  get result() {
    return Chapter2.njslkxy263(
      +this.data.Q,
      +this.data.b,
      +this.data.h,
      +this.data.H_堰,
      +this.data.H,
      +this.data['\\frac{L1}{h}']
    )
  }
}
</script>
