/*
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2020-08-26 19:35:46
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-07-16 22:10:38
 * @FilePath: \hycom_app\src\router.ts
 * @Description:
 * Copyright (c) 2022 by Xu.WANG raymondmgwx@gmail.com, All Rights Reserved.
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

/*
  redirect:                      if `redirect: noredirect`, it won't redirect if click on the breadcrumb
  meta: {
    title: 'title'               the name showed in subMenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon showed in the sidebar
    breadcrumb: false            if false, the item will be hidden in breadcrumb (default is true)
    hidden: true                 if true, this route will not show in the sidebar (default is false)
  }
*/

export default new Router({
  // mode: 'history',  // Disabled due to Github Pages doesn't support this, enable this if you need.
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      component: () => import(/* webpackChunkName: "login" */ '@/views/login/index.vue'),
      meta: { hidden: true }
    },
    {
      path: '/register',
      component: () => import(/* webpackChunkName: "register" */ '@/views/register/index.vue'),
      meta: { hidden: true }
    },
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue'),
      meta: { hidden: true }
    },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'HYCOM2.0',
      meta: { hidden: true },
      children: [{
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue')
      },
      {
        path: 'contact',
        component: () => import(/* webpackChunkName: "contact" */ '@/views/contact/index.vue')
      },
      {
        path: 'guide',
        beforeEnter() { location.href = 'https://raymondmcguire.gitee.io/hycom/guide/' }
      },
      {
        path: 'admin_panel',
        component: () => import(/* webpackChunkName: "admin_panel" */ '@/views/admin_panel/index.vue')
      }]
    },
    {
      path: '/section2',
      component: Layout,
      redirect: '/section2/2.1',
      name: '溢洪道水力学计算',
      meta: { title: '溢洪道水力学计算', icon: 'nested' },
      children: [
        {
          path: '2.1',
          component: () => import(/* webpackChunkName: "2.1" */ '@/views/section2/2.1/index.vue'),
          name: '泄流能力计算',
          meta: { title: '泄流能力计算' },
          children: [
            {
              path: '2.1.1',
              component: () => import(/* webpackChunkName: "2.1.1" */ '@/views/section2/2.1/2.1.1/index.vue'),
              name: '开敞式幂曲线实用堰的泄流能力',
              meta: { title: '开敞式幂曲线实用堰的泄流能力' }
            },
            {
              path: '2.1.2',
              component: () => import(/* webpackChunkName: "2.1.2" */ '@/views/section2/2.1/2.1.2/index.vue'),
              name: '宽顶堰泄流能力',
              meta: { title: '宽顶堰泄流能力' }
            },
            {
              path: '2.1.3',
              component: () => import(/* webpackChunkName: "2.1.3" */ '@/views/section2/2.1/2.1.3/index.vue'),
              name: '驼峰堰泄流能力',
              meta: { title: '驼峰堰泄流能力' }
            },
            {
              path: '2.1.4',
              component: () => import(/* webpackChunkName: "2.1.4" */ '@/views/section2/2.1/2.1.4/index.vue'),
              name: '带胸墙孔口泄流能力',
              meta: { title: '带胸墙孔口泄流能力（非淹没流、闸门全开）' },
              children: [
                {
                  path: '2.1.4.1',
                  component: () => import(/* webpackChunkName: "2.1.4.1" */ '@/views/section2/2.1/2.1.4/2.1.4.1/index.vue'),
                  name: '带胸墙实用堰',
                  meta: { title: '带胸墙实用堰' }
                },
                {
                  path: '2.1.4.2',
                  component: () => import(/* webpackChunkName: "2.1.4.2" */ '@/views/section2/2.1/2.1.4/2.1.4.2/index.vue'),
                  name: '平底带胸墙孔口式闸',
                  meta: { title: '平底带胸墙孔口式闸' }
                }
              ]
            }
          ]
        },
        {
          path: '2.2',
          component: () => import(/* webpackChunkName: "2.2" */ '@/views/section2/2.2/index.vue'),
          name: '泄槽水面线的计算',
          meta: { title: '泄槽水面线的计算' }
        },
        {
          path: '2.3',
          component: () => import(/* webpackChunkName: "2.3" */ '@/views/section2/2.3/index.vue'),
          name: '挑流消能',
          meta: { title: '挑流消能' },
          children: [
            {
              path: '2.3.2',
              component: () => import(/* webpackChunkName: "2.3.1" */ '@/views/section2/2.3/2.3.2/index.vue'),
              name: '冲刷坑深度计算',
              meta: { title: '冲刷坑深度计算' }
            },
            {
              path: '2.3.1',
              component: () => import(/* webpackChunkName: "2.3.1" */ '@/views/section2/2.3/2.3.1/index.vue'),
              name: '挑流消能挑距计算',
              meta: { title: '挑流消能挑距计算' }
            }
          ]
        },

        {
          path: '2.4',
          component: () => import(/* webpackChunkName: "2.4" */ '@/views/section2/2.4/index.vue'),
          name: '底流消能',
          meta: { title: '底流消能（等宽矩形断面）' },
          children: [
            {
              path: '2.4.1',
              component: () => import(/* webpackChunkName: "2.4.1" */ '@/views/section2/2.4/2.4.1/index.vue'),
              name: '水平光面护坦上的水跃',
              meta: { title: '水平光面护坦上的水跃计算' }
            },
            {
              path: '2.4.2',
              component: () => import(/* webpackChunkName: "2.4.2" */ '@/views/section2/2.4/2.4.2/index.vue'),
              name: '下挖式消力池的水跃',
              meta: { title: '下挖式消力池的水跃计算' }
            }
          ]
        },
        {
          path: '2.5',
          component: () => import(/* webpackChunkName: "2.5" */ '@/views/section2/2.5/index.vue'),
          name: '溢洪道泄流水流空化数',
          meta: { title: '水流空化数计算' }
        },
        {
          path: '2.6',
          component: () => import(/* webpackChunkName: "2.6" */ '@/views/section2/2.6/index.vue'),
          name: '台阶溢洪道水力',
          meta: { title: '台阶溢洪道水力计算' },
          children: [
            {
              path: '2.6.1',
              component: () => import(/* webpackChunkName: "2.6.1" */ '@/views/section2/2.6/2.6.1/index.vue'),
              name: '昌桑计算方法',
              meta: { title: '昌桑计算方法' }
            },
            {
              path: '2.6.2',
              component: () => import(/* webpackChunkName: "2.6.2" */ '@/views/section2/2.6/2.6.2/index.vue'),
              name: '南京水利科学研究院方法',
              meta: { title: '南京水利科学研究院方法计算' }
            }
          ]
        }
      ]
    },
    {
      path: '/section3/3.2',
      component: Layout,
      redirect: '/section3/3',
      name: '侧槽溢洪道水力学计算',
      meta: { title: '侧槽溢洪道水力学计算', icon: 'nested' },
      children: [
        {
          path: '3.2.1',
          component: () => import(/* webpackChunkName: "3.2.1" */ '@/views/section3/3/3.2.1/index.vue'),
          name: '侧槽断溢流前缘的总长度计算',
          meta: { title: '侧槽断溢流前缘的总长度计算' }
        },
        {
          path: '3.3.1',
          component: () => import(/* webpackChunkName: "3.3.1" */ '@/views/section3/3/3.3.1/index.vue'),
          name: '侧槽断水面线的计算',
          meta: { title: '侧槽断水面线的计算' }
        }
      ]
    },
    {
      path: '/chapter2',
      component: Layout,
      redirect: '/chapter2/2.1',
      name: '水工隧洞水力学计算',
      meta: { title: '水工隧洞水力学计算', icon: 'nested' },
      children: [
        {
          path: '2.1',
          component: () => import(/* webpackChunkName: "2.1" */ '@/views/chapter2/2.1/index.vue'),
          name: '水工有压隧洞水力学计算',
          meta: { title: '水工有压隧洞水力学计算' },
          children: [
            {
              path: '2.1.1',
              component: () => import(/* webpackChunkName: "2.1.1" */ '@/views/chapter2/2.1/2.1.1/index.vue'),
              name: '水工有压隧洞泄量计算',
              meta: { title: '水工有压隧洞泄量计算' }
            },
            {
              path: '2.1.2',
              component: () => import(/* webpackChunkName: "2.1.2" */ '@/views/chapter2/2.1/2.1.2/index.vue'),
              name: '有压短管后接无压隧洞泄量计算',
              meta: { title: '有压短管后接无压隧洞泄量计算' }
            }
          ]
        },
        {
          path: '2.2',
          component: () => import(/* webpackChunkName: "2.2" */ '@/views/chapter2/2.2/index.vue'),
          name: '无压隧洞的水面线计算',
          meta: { title: '无压隧洞的水面线计算' }
        },
        {
          path: '2.3',
          component: () => import(/* webpackChunkName: "2.3" */ '@/views/chapter2/2.3/index.vue'),
          name: '2.3水流空化数计算',
          meta: { title: '水流空化数计算' }
        },
        {
          path: '4.3',
          component: () => import(/* webpackChunkName: "4.3" */ '@/views/chapter2/4.3/index.vue'),
          name: '有压短管后接无压隧洞水力学计算',
          meta: { title: '有压短管后接无压隧洞水力学计算' },
          children: [
            {
              path: '4.3.2.1',
              component: () => import(/* webpackChunkName: "4.3.2.1" */ '@/views/chapter2/4.3/4.3.2.1/index.vue'),
              name: '典型有压短管泄流能力计算',
              meta: { title: '典型有压短管泄流能力计算' }
            }
          ]
        }
      ]
    },
    {
      path: '/chapter3',
      component: Layout,
      redirect: '/chapter3/3.1',
      name: '竖井式泄洪洞水力学计算',
      meta: { title: '竖井式泄洪洞水力学计算', icon: 'nested' },
      children: [
        {
          path: '3.1',
          component: () => import(/* webpackChunkName: "3.1" */ '@/views/chapter3/3.1/index.vue'),
          name: '环形堰竖井泄洪洞',
          meta: { title: '环形堰竖井泄洪洞' }
        },
        {
          path: '3.2',
          component: () => import(/* webpackChunkName: "3.2" */ '@/views/chapter3/3.2/index.vue'),
          name: '涡流式竖井泄洪洞',
          meta: { title: '涡流式竖井泄洪洞' }
        }
      ]
    },
    {
      path: '/chapter4',
      component: Layout,
      redirect: '/chapter4/4.1',
      name: '砼重力（拱）坝坝身泄水建筑物水力学计算',
      meta: { title: '砼重力（拱）坝坝身泄水建筑物水力学计算', icon: 'nested' },
      children: [
        {
          path: '4.1',
          component: () => import(/* webpackChunkName: "4.1" */ '@/views/chapter4/4.1/index.vue'),
          name: '开敞式溢流堰的泄流能力',
          meta: { title: '开敞式溢流堰的泄流能力' }
        },
        {
          path: '4.2',
          component: () => import(/* webpackChunkName: "4.2" */ '@/views/chapter4/4.2/index.vue'),
          name: '孔口泄流能力',
          meta: { title: '孔口泄流能力' }
        },
        {
          path: '4.3',
          component: () => import(/* webpackChunkName: "4.3" */ '@/views/chapter4/4.3/index.vue'),
          name: '水面波动及掺气计算',
          meta: { title: '水面波动及掺气计算' }
        },
        {
          path: '4.4',
          component: () => import(/* webpackChunkName: "4.4" */ '@/views/chapter4/4.4/index.vue'),
          name: '挑流消能挑距和冲坑深度计算',
          meta: { title: '挑流消能挑距和冲坑深度计算' }
        },
        {
          path: '4.5',
          component: () => import(/* webpackChunkName: "4.5" */ '@/views/chapter4/4.5/index.vue'),
          name: '底流消能水跃长度计算',
          meta: { title: '底流消能水跃长度计算' }
        }
      ]
    },
    {
      path: '/chapter5',
      component: Layout,
      redirect: '/chapter5/5.1',
      name: '渠道水力学计算',
      meta: { title: '渠道水力学计算', icon: 'nested' },
      children: [
        {
          path: '5.1',
          component: () => import(/* webpackChunkName: "5.1" */ '@/views/chapter5/5.1/index.vue'),
          name: '明渠均匀流水力计算',
          meta: { title: '明渠均匀流水力计算' }
        },
        {
          path: '5.2',
          component: () => import(/* webpackChunkName: "5.2" */ '@/views/chapter5/5.2/index.vue'),
          name: '渠道非均匀流水面线计算',
          meta: { title: '渠道非均匀流水面线计算' }
        }
      ]
    },
    {
      path: '/chapter6',
      component: Layout,
      redirect: '/chapter6/6.1',
      name: '水电站压力管道水力学计算',
      meta: { title: '水电站压力管道水力学计算', icon: 'nested' },
      children: [
        {
          path: '6.1',
          component: () => import(/* webpackChunkName: "6.1" */ '@/views/chapter6/6.1/index.vue'),
          name: '经济直径计算',
          meta: { title: '经济直径计算' }
        },
        {
          path: '6.2',
          component: () => import(/* webpackChunkName: "6.2" */ '@/views/chapter6/6.2/index.vue'),
          name: '圆形管道水头损失计算',
          meta: { title: '圆形管道水头损失计算' }
        },
        {
          path: '6.3',
          component: () => import(/* webpackChunkName: "6.3" */ '@/views/chapter6/6.3/index.vue'),
          name: '水锤计算',
          meta: { title: '水锤计算' },
          children: [
            {
              path: '6.3.1',
              component: () => import(/* webpackChunkName: "6.3.1" */ '@/views/chapter6/6.3/6.3.1/index.vue'),
              name: '水锤波速计算',
              meta: { title: '水锤波速计算' }
            }, {
              path: '6.3.2',
              component: () => import(/* webpackChunkName: "6.3.2" */ '@/views/chapter6/6.3/6.3.2/index.vue'),
              name: '管道特征系数计算',
              meta: { title: '管道特征系数计算' }
            }, {
              path: '6.3.3',
              component: () => import(/* webpackChunkName: "6.3.3" */ '@/views/chapter6/6.3/6.3.3/index.vue'),
              name: '水锤的特性参数计算',
              meta: { title: '水锤的特性参数计算' }
            },
            {
              path: '6.3.4',
              component: () => import(/* webpackChunkName: "6.3.4" */ '@/views/chapter6/6.3/6.3.4/index.vue'),
              name: '直接水锤和间接水锤的判断计算',
              meta: { title: '直接水锤和间接水锤的判断计算' }
            }, {
              path: '6.3.5',
              component: () => import(/* webpackChunkName: "6.3.5" */ '@/views/chapter6/6.3/6.3.5/index.vue'),
              name: '直接水锤计算',
              meta: { title: '直接水锤计算' }
            }, {
              path: '6.3.6',
              component: () => import(/* webpackChunkName: "6.3.6" */ '@/views/chapter6/6.3/6.3.6/index.vue'),
              name: '间接水锤计算',
              meta: { title: '间接水锤计算' }
            }
          ]
        }
      ]
    },
    {
      path: '/chapter7',
      component: Layout,
      redirect: '/chapter7/7.1',
      name: '城镇供水长距离输水管水力学计算',
      meta: { title: '城镇供水长距离输水管水力学计算', icon: 'nested' },
      children: [
        {
          path: '7.1',
          component: () => import(/* webpackChunkName: "7.1" */ '@/views/chapter7/7.1/index.vue'),
          name: '塑料管道沿程水头损失（达西公式）计算',
          meta: { title: '塑料管道沿程水头损失（达西公式）计算' }
        },
        {
          path: '7.2',
          component: () => import(/* webpackChunkName: "7.2" */ '@/views/chapter7/7.2/index.vue'),
          name: '砼管（渠）及水泥砂浆内衬的金属管道（谢才公式）计算',
          meta: { title: '砼管（渠）及水泥砂浆内衬的金属管道（谢才公式）计算' }
        },
        {
          path: '7.3',
          component: () => import(/* webpackChunkName: "7.3" */ '@/views/chapter7/7.3/index.vue'),
          name: '输配水管道、配水管网水力平差计算（海曾—威廉公式）计算',
          meta: { title: '输配水管道、配水管网水力平差计算（海曾—威廉公式）计算' }
        },
        {
          path: '7.4',
          component: () => import(/* webpackChunkName: "7.4" */ '@/views/chapter7/7.4/index.vue'),
          name: '管（渠）道局部损失计算',
          meta: { title: '管（渠）道局部损失计算' }
        },
        {
          path: '7.5',
          component: () => import(/* webpackChunkName: "7.5" */ '@/views/chapter7/7.5/index.vue'),
          name: '管（渠）道总水头损失计算',
          meta: { title: '管（渠）道总水头损失计算' }
        }
      ]
    },
    {
      path: '*',
      redirect: '/404',
      meta: { hidden: true }
    }
  ]
})
