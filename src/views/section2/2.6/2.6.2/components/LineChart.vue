<!--
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2022-06-12 13:00:59
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-06-12 14:49:24
 * @FilePath: \hycom_app\src\views\section2\2.6\2.6.2\components\LineChart.vue
 * @Description:
 * Copyright (c) 2022 by Xu.WANG raymondmgwx@gmail.com, All Rights Reserved.
-->

<template>
  <el-row :gutter="20">
    <el-col :span="11">
      <img
        style="width:100%"
        src="@/assets/images/graph/fig266.png"
      >
    </el-col>
    <el-col :span="9">
      <Scatter
        :chart-options="chartOptions"
        :chart-data="chartData"
        :chart-id="chartId"
        :dataset-id-key="datasetIdKey"
        :plugins="plugins"
        :css-classes="cssClasses"
        :styles="styles"
        :width="width"
        :height="height"
      />
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

import { Scatter } from 'vue-chartjs/legacy'

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
} from 'chart.js'

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  CategoryScale,
  PointElement,
  LinearScale
)

@Component({
  name: 'LineChart',
  components: {
    Scatter
  }
})

export default class extends Vue {
@Prop({ default: 'line-chart' }) chartId!: string;
@Prop({ default: 'label' }) datasetIdKey!: string;
@Prop({ default: 400 }) width!: number;
@Prop({ default: 400 }) height!: number;
@Prop({ default: '' }) cssClasses!: string;
@Prop({ default: () => {} }) styles!: object;
@Prop({ default: () => [] }) plugins!: Array<string>;

data() {
  return {
    chartData: {
      datasets: [
        {
          label: '阶梯坝（试验结果）',
          fill: false,
          radius: 0,

          showLine: true,
          tension: 0.5,
          borderColor: 'red',
          backgroundColor: 'red',

          data: [

            { x: 0.4040404040404041, y: 7.432825988360578 },
            { x: 0.4444444444444445, y: 7.551091892146476 },
            { x: 0.48484848484848486, y: 7.6826473059466505 },
            { x: 0.5252525252525253, y: 7.826632731567945 },
            { x: 0.5656565656565657, y: 7.982229158557533 },
            { x: 0.6060606060606061, y: 8.148657486575775 },
            { x: 0.6464646464646465, y: 8.325177947769081 },
            { x: 0.686868686868687, y: 8.511089529142756 },
            { x: 0.7272727272727273, y: 8.705729394933876 },
            { x: 0.7676767676767677, y: 8.908472308984127 },
            { x: 0.8080808080808082, y: 9.11873005711268 },
            { x: 0.8484848484848485, y: 9.335950869489036 },
            { x: 0.888888888888889, y: 9.559618843005891 },
            { x: 0.9292929292929294, y: 9.789253363651987 },
            { x: 0.9696969696969697, y: 10.024408528884983 },
            { x: 1.0101010101010102, y: 10.264672570004297 },
            { x: 1.0505050505050506, y: 10.509667274523979 },
            { x: 1.090909090909091, y: 10.75904740854555 },
            { x: 1.1313131313131315, y: 11.012500139130882 },
            { x: 1.1717171717171717, y: 11.269744456675038 },
            { x: 1.2121212121212122, y: 11.530530597279146 },
            { x: 1.2525252525252526, y: 11.794639465123236 },
            { x: 1.292929292929293, y: 12.061882054839122 },
            { x: 1.3333333333333335, y: 12.332098873883233 },
            { x: 1.373737373737374, y: 12.6051593649095 },
            { x: 1.4141414141414144, y: 12.880961328142197 },
            { x: 1.4545454545454546, y: 13.159430343748792 },
            { x: 1.494949494949495, y: 13.440519194212818 },
            { x: 1.5353535353535355, y: 13.72420728670674 },
            { x: 1.575757575757576, y: 14.010500075464781 },
            { x: 1.6161616161616164, y: 14.299428484155811 },
            { x: 1.6565656565656568, y: 14.591048328256193 },
            { x: 1.696969696969697, y: 14.88543973742263 },
            { x: 1.7373737373737375, y: 15.182706577865046 },
            { x: 1.777777777777778, y: 15.482975874719429 },
            { x: 1.8181818181818183, y: 15.786397234420686 },
            { x: 1.8585858585858588, y: 16.09314226707552 },
            { x: 1.8989898989898992, y: 16.403404008835246 },
            { x: 1.9393939393939394, y: 16.71739634426871 },
            { x: 1.97979797979798, y: 17.0353534287351 },
            { x: 2.0202020202020203, y: 17.357529110756808 },
            { x: 2.060606060606061, y: 17.684196354392316 },
            { x: 2.101010101010101, y: 18.015646661609022 },
            { x: 2.1414141414141414, y: 18.35218949465612 },
            { x: 2.181818181818182, y: 18.69415169843745 },
            { x: 2.2222222222222223, y: 19.041876922884352 },
            { x: 2.262626262626263, y: 19.39572504532853 },
            { x: 2.303030303030303, y: 19.756071592874893 },
            { x: 2.3434343434343434, y: 20.123307164774452 },
            { x: 2.383838383838384, y: 20.497836854797136 },
            { x: 2.4242424242424243, y: 20.880079673604676 },
            { x: 2.464646464646465, y: 21.270467971123452 },
            { x: 2.505050505050505, y: 21.669446858917336 },
            { x: 2.545454545454546, y: 22.0774736325606 },
            { x: 2.585858585858586, y: 22.495017194010703 },
            { x: 2.6262626262626263, y: 22.92255747398122 },
            { x: 2.666666666666667, y: 23.360584854314656 },
            { x: 2.707070707070707, y: 23.8095995903553 },
            { x: 2.747474747474748, y: 24.27011123332212 },
            { x: 2.787878787878788, y: 24.74263805268156 },
            { x: 2.8282828282828287, y: 25.227706458520498 },
            { x: 2.868686868686869, y: 25.725850423918963 },
            { x: 2.909090909090909, y: 26.237610907323155 },
            { x: 2.94949494949495, y: 26.76353527491817 },
            { x: 2.98989898989899, y: 27.304176723000893 },
            { x: 3.0303030303030307, y: 27.86009370035293 },
            { x: 3.070707070707071, y: 28.431849330613353 },
            { x: 3.111111111111111, y: 29.020010834651625 },
            { x: 3.151515151515152, y: 29.625148952940457 },
            { x: 3.191919191919192, y: 30.24783736792865 },
            { x: 3.2323232323232327, y: 30.888652126413945 },
            { x: 3.272727272727273, y: 31.548171061915887 },
            { x: 3.3131313131313136, y: 32.22697321704873 },
            { x: 3.353535353535354, y: 32.925638265894186 },
            { x: 3.393939393939394, y: 33.6447459363744 },
            { x: 3.4343434343434347, y: 34.38487543262478 },
            { x: 3.474747474747475, y: 35.14660485736674 },
            { x: 3.5151515151515156, y: 35.930510634280736 },
            { x: 3.555555555555556, y: 36.737166930379 },
            { x: 3.5959595959595965, y: 37.56714507837843 },
            { x: 3.6363636363636367, y: 38.42101299907348 },
            { x: 3.676767676767677, y: 39.29933462370901 },
            { x: 3.7171717171717176, y: 40.202669316353045 },
            { x: 3.757575757575758, y: 41.13157129626981 },
            { x: 3.7979797979797985, y: 42.08658906029247 },
            { x: 3.8383838383838387, y: 43.06826480519588 },
            { x: 3.878787878787879, y: 44.07713385006978 },
            { x: 3.9191919191919196, y: 45.113724058691304 },
            { x: 3.95959595959596, y: 46.17855526189802 },
            { x: 4.0, y: 47.27213867996073 }
          ]
        },
        {
          label: '光滑坝',
          fill: false,
          radius: 0,

          showLine: true,
          tension: 0.5,
          borderColor: 'blue',
          backgroundColor: 'blue',

          data: [
            { x: 0.6, y: 2.7929025151171913 },
            { x: 0.6204081632653061, y: 4.995573972063937 },
            { x: 0.6408163265306123, y: 7.131010758333105 },
            { x: 0.6612244897959183, y: 9.20088932880985 },
            { x: 0.6816326530612244, y: 11.206886138379417 },
            { x: 0.7020408163265306, y: 13.150677641927004 },
            { x: 0.7224489795918367, y: 15.03394029433781 },
            { x: 0.7428571428571429, y: 16.858350550497065 },
            { x: 0.7632653061224489, y: 18.625584865289994 },
            { x: 0.7836734693877551, y: 20.33731969360177 },
            { x: 0.8040816326530612, y: 21.99523149031762 },
            { x: 0.8244897959183672, y: 23.60099671032276 },
            { x: 0.8448979591836734, y: 25.15629180850243 },
            { x: 0.8653061224489795, y: 26.662793239741774 },
            { x: 0.8857142857142857, y: 28.122177458926103 },
            { x: 0.9061224489795918, y: 29.536120920940533 },
            { x: 0.926530612244898, y: 30.90630008067029 },
            { x: 0.9469387755102041, y: 32.234391393000664 },
            { x: 0.9673469387755101, y: 33.52207131281676 },
            { x: 0.9877551020408163, y: 34.771016295003875 },
            { x: 1.0081632653061223, y: 35.98290279444714 },
            { x: 1.0285714285714285, y: 37.15940726603185 },
            { x: 1.0489795918367346, y: 38.302206164643195 },
            { x: 1.0693877551020408, y: 39.41297594516635 },
            { x: 1.089795918367347, y: 40.49339306248655 },
            { x: 1.110204081632653, y: 41.54513397148901 },
            { x: 1.130612244897959, y: 42.569875127058936 },
            { x: 1.1510204081632653, y: 43.56929298408153 },
            { x: 1.1714285714285713, y: 44.545063997442014 },
            { x: 1.1918367346938776, y: 45.49886462202562 },
            { x: 1.2122448979591836, y: 46.43237131271752 },
            { x: 1.2326530612244897, y: 47.34726052440294 },
            { x: 1.2530612244897958, y: 48.24520871196711 },
            { x: 1.273469387755102, y: 49.127892330295225 },
            { x: 1.2938775510204081, y: 49.99698783427252 },
            { x: 1.314285714285714, y: 50.85417167878418 },
            { x: 1.3346938775510204, y: 51.7011203187154 },
            { x: 1.3551020408163263, y: 52.53951020895144 },
            { x: 1.3755102040816327, y: 53.37101780437746 },
            { x: 1.3959183673469386, y: 54.197319559878736 },
            { x: 1.4163265306122448, y: 55.02009193034041 },
            { x: 1.436734693877551, y: 55.84101137064775 },
            { x: 1.457142857142857, y: 56.661754335685885 },
            { x: 1.4775510204081632, y: 57.48399728034016 },
            { x: 1.4979591836734691, y: 58.30941665949567 },
            { x: 1.5183673469387755, y: 59.139688928037714 },
            { x: 1.5387755102040814, y: 59.97649054085139 },
            { x: 1.5591836734693878, y: 60.82149795282203 },
            { x: 1.5795918367346937, y: 61.67638761883478 },
            { x: 1.6, y: 62.5428359937749 }
          ]
        }

      ]
    },
    chartOptions: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
          title: {
            display: true,
            text: 'dc/h'
          }
        },
        y: {
          display: true,
          title: {
            display: true,
            text: 'L1/h'
          }
        }
      }
    }
  }
}
}
</script>
