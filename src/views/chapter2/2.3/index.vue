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
import { Chapter1 } from '@/hycom_lib/chapter1'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter3Section3 extends Vue {
  private title = '3.3水流空化数计算';
  private initData = {
    '\\nabla': 198.8,
    h_0: 16.14,
    h_v: 0.17,
    v: 18.0917
  };
  private data = {
    '\\nabla': '',
    h_0: '',
    h_v: '',
    v: ''
  };

  private formulas = {
    0: '$$h_0 :计算断面处的时均动水压力水柱高,m$$',
    1: '$$\\nabla :计算断面高程,m$$',
    2: '$$h_a :计算断面处的大气压力水柱高,m$$',
    3: '$$h_v :水的汽化压力水柱高,m$$',
    4: '$$v :计算断面的平均流速,m$$',
    5: '$$\\sigma :计算断面的空化数$$'
  };

  private demoContent =
    '国外某水电站工程（同上例）,水库水温15度,计算PMF洪水下泄槽的空化数.';
  private demoResult = '求得PMF洪水下泄槽的空化数为1.02.不需要设掺气坎.';

  get result() {
    let objs = Chapter1.slkqhs(
      +this.data['\\nabla'],
      +this.data.h_0,
      +this.data.h_v,
      +this.data.v
    )
    let outStr = '空化数:'
    outStr += objs.sigma.toFixed(2).toString() + '|' + objs.out
    return outStr
  }
}
</script>
