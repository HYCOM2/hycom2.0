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
export default class Chapter5Section4 extends Vue {
  private title = '5.4挑流消能挑距和冲坑深度计算';
  private initData = {
    h: 7.781,
    '\\theta': 15,
    H_0: 134.879,
    h_2: 42.466,
    K: 1.4,
    q: 14600 / 50,
    H: 177,
    't^{\\prime}': 19
  };
  private data = {
    h: '',
    '\\theta': '',
    H_0: '',
    h_2: '',
    K: '',
    q: '',
    H: '',
    't^{\\prime}': ''
  };

  private formulas = {
    0: '$$Q :管道设计流量,m^3/s$$',
    1: '$$L :鼻坎顶算起的挑流水舌外缘与下游水面交点的水平距离,m$$',
    2: '$$L^{\\prime} :冲坑最低点到挑坎坎顶的水平距离,m$$',
    3: '$$\\theta :挑角$$',
    4: '$$h_1 :鼻坎坎顶铅直方向水深,m$$',
    5: '$$h :鼻坎坎顶法向平均水深,m$$',
    6: '$$h_2 :鼻坎坎顶至下游水面高差,m$$',
    7: '$$v_1 :鼻坎坎顶的水面流速,m/s$$',
    8: '$$H_0 :坎顶水头,m$$',
    9: '$$q :鼻坎处单宽流量,m^3/s$$',
    10: '$$K :综合冲刷系数$$',
    11: '$$H :上下游水面差,m$$',
    12: '$$\\beta :水舌外缘与下游水面夹角$$',
    13: '$$L_c :水面以下水舌长度的水平投影计算$$',
    14: '$$t^{\\prime} :下游水深,m$$',
    15: '$$t :下游水面至坑底的最大水垫深度,m$$',
    16: '$$T :冲坑深度,m$$'
  };

  private demoContent =
    '某水电站工程,溢流堰为实用堰,弧形闸门控制,堰前行近流速为2.6m,PMF 洪水下,水库水位233m,下泄流量14600m3/s,鼻坎宽50m,鼻坎坎顶高程98.466m,下游水位56m,下游河床高程37m,鼻坎挑角15º.下游河床为砂岩和砂岩页岩互层,砂岩块度0.3×0.5×0.8m3,砂岩页岩互层块度0.1×0.3×0.4m3,抗冲流速4m/s 左右.计算PMF洪水下挑距和冲坑深度.';
  private demoResult = '求得PMF洪水下挑距为333.65,冲坑深度为68.26';

  get result() {
    let value = Chapter4.tljs(
      +this.data.h,
      (+this.data['\\theta'] * Math.PI) / 180,
      +this.data.H_0,
      +this.data.h_2,
      +this.data.K,
      +this.data.q,
      +this.data.H,
      +this.data['t^{\\prime}']
    )

    return (
      '挑距:' +
      value[0].toFixed(2).toString() +
      '|冲坑深度:' +
      value[1].toFixed(2).toString()
    )
  }
}
</script>
