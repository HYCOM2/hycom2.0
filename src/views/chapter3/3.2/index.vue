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
import { Chapter3 } from '@/hycom_lib/chapter3'

import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm
  }
})
export default class Chapter4Section2 extends Vue {
  private title = '4.2涡流式竖井泄洪洞';
  private initData = {
    '\\mu': 0.85,
    d: 9,
    H: 19,
    '\\delta': 0.45,
    v_0: 0
  };
  private data = {
    '\\mu': '',
    d: '',
    H: '',
    '\\delta': '',
    v_0: ''
  };

  private formulas = {
    0: '$$Q :流量,m^3/s$$',
    1: '$$H :堰顶水头,m$$',
    2: '$$d :竖井直径,m$$',
    3: '$$\\upsilon_0 :堰前行近流速,m/s$$',
    4: '$$\\mu :流量系数,一般取0.85$$',
    5: '$$\\delta :竖井和涡室连接处的棱角以半径\\delta=(0.1~0.2)d/2予以修圆,m$$'
  };

  private demoContent =
    '同上.mu=0.85,d=9m,H=2008-1989=19m,delta (0.1 ~ 0.2)d / 2=0.1*9/2=0.45, v_0 =0';
  private demoResult = '求得Q为1055.80';

  get result() {
    let value = Chapter3.wlsxlnl(
      +this.data['\\mu'],
      +this.data.d,
      +this.data.H,
      +this.data['\\delta'],
      +this.data.v_0
    )
    return '流量=' + value.toFixed(2).toString()
  }
}
</script>
