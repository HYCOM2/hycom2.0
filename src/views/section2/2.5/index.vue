<!--
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2022-03-11 21:19:00
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-06-05 01:21:02
 * @FilePath: \hycom_app\src\views\chapter1\2.5\index.vue
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
        <el-row :gutter="20">
          <el-tabs
            v-model="activeTableName"
            style="margin-top: 15px"
            type="border-card"
          >
            <el-tab-pane
              v-for="item in tableOptions"
              :key="item.key"
              :label="item.label"
              :name="item.key"
            >
              <keep-alive>
                <table-pane
                  v-if="activeTableName === item.key"
                  :type="item.key"
                />
              </keep-alive>
            </el-tab-pane>
          </el-tabs>
          <br>
        </el-row>
      </div>
    </hycom-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { Chapter1 } from '@/hycom_lib/chapter1'
import { Table2DLerp } from '@/hycom_lib/common'

import TablePane from './components/TablePane.vue'
import HycomForm from '@/components/HycomForm/index.vue'

@Component({
  components: {
    HycomForm,
    TablePane
  }
})
export default class Chapter1Section3 extends Vue {
  public title = '2.5.1水流空化数计算';
  public initData = {
    '\\nabla': 198.8,
    h_0: 16.14,
    v: 18.0917,
    C: 15
  };
  public data = {
    '\\nabla': '',
    h_0: '',
    v: '',
    C: ''
  };

  public formulas = {
    0: '$$h_0 :计算断面处的时均动水压力水柱高,m$$',
    1: '$$\\nabla :计算断面高程,m$$',
    2: '$$h_a :计算断面处的大气压力水柱高,m$$',
    3: '$$h_v :水的汽化压力水柱高,m$$',
    4: '$$v :计算断面的平均流速,m$$',
    5: '$$\\sigma :计算断面的空化数$$',
    6: '$$C :水温$$'
  };

  public demoContent =
    '国外某水电站工程（同上例）,水库水温15度,计算PMF洪水下泄槽的空化数.';
  public demoResult = '求得PMF洪水下泄槽的空化数为1.02.不需要设掺气坎.';

  // -------table 251 data--------------------------
  public table251Data = [
    [0.06, 0.09, 0.13, 0.17, 0.24, 0.32, 0.43, 0.75]
  ];
  public table251Vertical = [0];
  public table251Horizon = [0, 5, 10, 15, 20, 25, 30, 40];

  public tableOptions = [
    { label: '表：水的汽化压力水头hv与水温的关系', key: 't1' }
  ];
  public activeTableName = 't1';
  // -------table 251 data--------------------------

  get result() {
    let tableLerp = new Table2DLerp()
    let hv = tableLerp.arr(
      this.table251Vertical,
      this.table251Horizon,
      this.table251Data,
      0,
      +this.data.C
    )

    let objs = Chapter1.slkqhs(
      +this.data['\\nabla'],
      +this.data.h_0,
      hv,
      +this.data.v
    )
    let outStr = '空化数:'
    outStr += objs.sigma.toFixed(2).toString() + '|' + objs.out
    return outStr
  }
}
</script>
