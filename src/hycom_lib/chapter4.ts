/* eslint-disable */
import { g } from './common'
/**
 * Chapter4 砼重力（拱）坝坝身泄水建筑物水力学计算
 * 部分计算参考以下网址
 * https://raymondmcguire.github.io/?e=HYCAL&&theme=Image-Visual-Lab
 */
export module Chapter4 {

  /**
   * 4.1开敞式溢流堰的泄量
   * @param C
   * @param m
   * @param eplison
   * @param sigmaM
   * @param n
   * @param B
   * @param Hw
   * @returns Q
   */
  export function kcsylydxl(C: number, m: number, eplison: number, sigmaM: number, n: number, B: number, Hw: number) {
    let Q = C * m * eplison * sigmaM * n * B * Math.sqrt(2 * g) * Math.pow(Hw, 3 / 2)
    // console.log(Q);
    return Q
  }

  /**
   * 4.2孔口泄流计算
   * @param Ai
   * @param ksii
   * @param Aj
   * @param Xj
   * @param lj
   * @param nz
   * @param Ak
   * @param n
   * @param Hw
   * @returns Q
   */
  export function kkxljs(Ai: Array<number>, ksii: Array<number>, Aj: Array<number>, Xj: Array<number>, lj: Array<number>, nz: number, Ak: number, n: number, Hw: number) {
    let Rj = new Array<number>(Aj.length)
    for (let index = 0; index < Rj.length; index++) {
      Rj[index] = Aj[index] / Xj[index]
    }

    let sumi = 0
    let sumj = 0
    for (let index = 0; index < Ai.length; index++) {
      sumi += ksii[index] * Math.pow((Ak / Ai[index]), 2)
    }

    for (let index = 0; index < Aj.length; index++) {
      sumj += (2 * g * nz * nz * lj[index] / Math.pow(Rj[index], 4 / 3)) * Math.pow((Ak / Aj[index]), 2)
    }

    let miu = 1 / (Math.sqrt(1 + sumi + sumj))
    // console.log(miu);
    let Q = miu * n * Ak * Math.sqrt(2 * g * Hw)
    let Vk = Q / (n * Ak)
    // console.log(Q);
    // console.log(Vk);
    return [Q, Vk]
  }

  /**
   * 4.3水面波动及掺气计算
   * @param h
   * @param zeta
   * @param v
   * @returns hb
   *
   */
  export function smbdjsqjs(h: number, zeta: number, v: number) {
    let hb = (1 + zeta * v / 100) * h
    // console.log(hb);
    return hb
  }

  /**
   * 4.4挑流计算
   * @param h
   * @param theta
   * @param H0
   * @param h2
   * @param K
   * @param q
   * @param H
   * @param td
   * @returns LTotal,T
   *
   */
  export function tljs(h: number, theta: number, H0: number,
    h2: number, K: number, q: number, H: number, td: number) {
    let h1 = h / Math.cos(theta)
    let v1 = 0.95 * Math.sqrt(2 * g * (H0 - h1))
    let L = v1 * v1 * Math.cos(theta) * (Math.sin(theta) + Math.sqrt(Math.sin(theta) * Math.sin(theta) + 2 * g * (h1 + h2) / (v1 * v1))) / g
    let t = K * Math.pow(q, 0.5) * Math.pow(H, 0.25)

    let tanBeta = Math.sqrt(Math.tan(theta) * Math.tan(theta) + 2 * g * (h2 + h * Math.cos(theta)) / (v1 * v1 * Math.cos(theta) * Math.cos(theta)))
    let Lc = t / tanBeta
    // console.log(Lc);
    let LTotal = L + Lc
    let T = t - td
    // console.log(T);
    return [LTotal, T]
  }

  /**
   * 4.5底流消能水力计算
   * @param E
   * @param Q
   * @param b
   * @param H0
   * @returns
   * */
  export function dlxnsljs(E: number, Q: number, b: number, H0: number) {
    let phi = Math.sqrt(1 - 0.1 * Math.pow(E, 1 / 2) / Math.pow((Q / b), 1 / 3))
    // console.log(phi);
    phi = 0.8 // 低坝

    let h0 = 10
    let learningRate = 0.01
    let precision = 0.001
    for (let index = 0; index < 10000; index++) {
      let rightValue = (H0 - Math.pow((Q / b), 2) / (2 * g * phi * phi * h0 * h0)) - h0
      if (Math.abs(rightValue) < precision) {
        // console.log(h0);
        let v1 = Q / (b * h0)
        let Fr1 = v1 / Math.sqrt(g * h0)
        let h2 = h0 * (Math.sqrt(1 + 8 * Fr1 * Fr1) - 1) / 2
        let L = -1
        if (Fr1 > 4.5) {
          L = 6 * (h2 - h0)
        }
        // console.log(v1);
        // console.log(h2);
        // console.log(Fr1);
        // console.log(L);
        return [h0, h2, Fr1, L]
      }
      h0 -= learningRate * rightValue
    }

    return [-1]
  }

  //典型有压短管流量
  export function dxyydgll(B: number, e: number, H: number, mu: number, eplison: number) {
    let Q = mu * B * e * Math.sqrt(2 * g * (H - eplison * e))
    let v = Q / (B * e * eplison)
    return [Q, v]
  }
}
