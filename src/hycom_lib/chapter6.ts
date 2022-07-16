/* eslint-disable */
import { g } from './common'
/**
 * Chapter6 水电站压力管道水力学计算
 * 部分计算参考以下网址
 * https://raymondmcguire.github.io/?e=HYCAL&&theme=Image-Visual-Lab
 */
export module Chapter6 {

  /**
   * 6.1计算经济直径
   * @param vE
   * @param QMax
   * @returns D
   */
  export function jsjjzj(vE: number, QMax: number) {
    let D = Math.sqrt(4 * QMax / (Math.PI * vE))
    // console.log(D);
    return D
  }

  /**
   * 6.2 圆形管道水头损失计算
   * @param D
   * @param Q
   * @param n
   * @param zeta
   * @param L
   * @returns h
   */
  export function yxgdssjs(D: number, Q: number, n: number, zeta: number, L: number) {
    let R = D / 4
    let v = 4 * Q / (Math.PI * D * D)
    let h_y = n * n * v * v * L / Math.pow(R, 4 / 3)
    let h_j = zeta * v * v / (2 * g)
    // console.log(R);
    // console.log(zeta);
    // console.log(v);
    // console.log(h_y, h_j)
    let h = h_j + h_y
    // console.log(h);
    return h
  }

  /**
   * 6.3 水锤计算
   * 6.3.1 求水锤波速C
   * @param D
   * @param Es
   * @param deltaS
   * @param Ew
   * @param gamma
   */
  export function scbs(D: number, Es: number, deltaS: number, Ew: number, gamma: number) {
    let r = D / 2
    let K = Es * deltaS / (r * r)
    // console.log(K);
    let C = Math.sqrt(Ew * g * 100 / gamma) / (Math.sqrt(1 + 2 * Ew / (K * r)) * 100)
    return C
  }

  /**
   * 6.3.2 管道特征系数
   * @param C
   * @param vMax
   * @param H0
   */
  export function gdtzxs(C: number, vMax: number, H0: number) {
    let rou = C * vMax / (2 * g * H0)
    // console.log(rou);
    return rou
  }

  /**
   * 6.3.3 求水锤的特性参数
   * @param L
   * @param vMax
   * @param Ts
   * @param H0
   */
  export function sctxcs(L: number, vMax: number, Ts: number, H0: number) {
    let sigma = L * vMax / (g * H0 * Ts)
    // console.log(sigma);
    return sigma
  }

  /**
   * 6.3.4 判断直接水锤和间接水锤
   * @param L
   * @param C
   * @param Ts
   */
  export function pdzjschjjsc(L: number, C: number, Ts: number) {
    let tR = 2 * L / C
    // console.log(tR);
    if (Ts < tR) {
      return '直接水锤'
    } else {
      return '间接水锤'
    }
  }

  /**
   * 6.3.5 直接水锤计算
   * @param C
   * @param Ts
   */
  export function zjsc(C: number, v0: number) {
    let deltaH = C * v0 / g
    // console.log(deltaH);
    return deltaH
  }

  /**
   * 6.3.6 间接水锤计算
   * @param tou0
   * @param rou
   * @param sigma
   * @param H0
   */
  export function jssc(tou0: number, rou: number, sigma: number, H0: number) {
    let judge = tou0 * rou
    let tou = 0
    let eta = 0

    if (judge < 1) {
      // 第一相水锤
      tou = 2 * sigma / (1 + judge - sigma)
      eta = 2 * sigma / (1 + judge + sigma)
    } else {
      tou = 2 * sigma / (2 - sigma)
      eta = 2 * sigma / (2 + sigma)
    }
    let deltaH = tou * H0
    let minusDeltaH = eta * H0

    // console.log(deltaH);
    // console.log(minusDeltaH);

    return [deltaH, minusDeltaH]
  }
}
