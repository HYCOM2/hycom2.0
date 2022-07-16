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
export default class Chapter5Section3 extends Vue {
  private title = '5.3水面波动及掺气计算';
  private initData = {
    h: 14,
    '\\varsigma': 1.1,
    v: 21.875
  };
  private data = {
    h: '',
    '\\varsigma': '',
    v: ''
  };

  private formulas = {
    0: '$$h :溢流面计算断面的水深,m$$',
    1: '$$h_b :溢流面计算断面的掺气水深,m$$',
    2: '$$v :不掺气情况下计算断面的流速,m/s$$',
    3: '$$\\varsigma :修正系数,取1~1.4s/m.$$'
  };

  private demoContent = '同5.1算例,求溢流面计算断面的掺气水深';
  private demoResult = '求得溢流面计算断面的掺气水深为17.37';

  get result() {
    let value = Chapter4.smbdjsqjs(
      +this.data.h,
      +this.data['\\varsigma'],
      +this.data.v
    )
    return '掺气水深=' + value.toFixed(2).toString()
  }
}
</script>
