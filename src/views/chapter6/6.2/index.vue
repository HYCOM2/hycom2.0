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
export default class Chapter7Section2 extends Vue {
  private title = '7.2圆形管道水头损失计算';
  private initData = {
    D: 11.5,
    Q: 579.76,
    n_z: 0.012,
    '\\zeta': 0.1 + 0.0432 + 0.1 + 0.2 + 0.05 + 0.05 + 0.05 + 0.18,
    L: 46.8 + 263.1
  };
  private data = {
    D: '',
    Q: '',
    n_z: '',
    '\\zeta': '',
    L: ''
  };

  private formulas = {
    0: '$$Q :流量,m^3/s$$',
    1: '$$n_z :糙率$$',
    2: '$$h :管道起始断面之间的总水头损失,m$$',
    3: '$$h_y :沿程水头损失,m$$',
    4: '$$h_j :局部水头损失,m$$',
    5: '$$L :管道的长度,m$$',
    6: '$$D :管道的直径,m$$',
    7: '$$R :管道的水力半径,m$$',
    8: '$$f :相应于圆形管道的沿程阻力系数$$',
    9: '$$\\zeta :局部水头损失系数$$'
  };

  private demoContent =
    '某水电站单机过流量579.76m^3/s,压力钢管直径11.5m,钢管糙率0.012,进水口长度46.8m,钢管从渐变段末端到厂房蜗壳中心处263.10m,局部水头损失系数见下表,求总水头损失.';
  private demoResult = '求得总水头损失为1.57';

  get result() {
    let value = Chapter6.yxgdssjs(
      +this.data.D,
      +this.data.Q,
      +this.data.n_z,
      +this.data['\\zeta'],
      +this.data.L
    )
    return '总水头损失=' + value.toFixed(2).toString()
  }
}
</script>
