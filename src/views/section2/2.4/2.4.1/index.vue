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
export default class Chapter1Section5Sub1 extends Vue {
  private title = '2.4.1水平光面护坦上的水跃计算';
  private initData = {
    Q: 2253,
    b: 15,
    H_0: 83.216
  };
  private data = {
    Q: '',
    b: '',
    H_0: ''
  };

  private formulas = {
    0: '$$E_0 :以下游收缩断面处为基准面的泄水建筑物上游的总能头（计入上游水流行进流速v_0）,m$$',
    1: '$$E :以下游收缩断面处为基准面的泄水建筑物上游的水头（不计入上游水流行进流速v_0）,m$$',
    2: '$$Q :流量,m^3/s$$',
    3: '$$b :消力池进口宽度,m$$',
    4: '$$H_0 :以消力池进口底板为基准面的泄水建筑物上游总水头,m$$',
    5: '$$\\phi :流速系数,0.85~0.95$$'
  };

  private demoContent =
    '某泄水建筑物,水流沿泄槽扩散进入消力池,消力池进口宽15m,底板高程1778m,水库校核水位为1860.4m,泄量为2253m3/s,下游水位1793.87m,计算水跃长度.';
  private demoResult = '求得水跃长度为172.46';

  get result() {
    return (
      '水跃长度=' +
      Chapter1.spghhtsdsyjs(+this.data.Q, +this.data.b, +this.data.H_0)
        .toFixed(2)
        .toString()
    )
  }
}
</script>
