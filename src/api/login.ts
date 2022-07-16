/*
 * @Author: Xu.WANG raymondmgwx@gmail.com
 * @Date: 2020-08-26 19:35:46
 * @LastEditors: Xu.WANG raymondmgwx@gmail.com
 * @LastEditTime: 2022-05-22 00:03:11
 * @FilePath: \hycom_app\src\api\login.ts
 * @Description:
 * Copyright (c) 2022 by Xu.WANG raymondmgwx@gmail.com, All Rights Reserved.
 */
import request from '@/utils/request'

export const login: any = (username: string, password: string) =>
  request({
    url: '/1.1/login', // '/user/login',
    method: 'post',
    data: {
      username,
      password
    }
  })

export const getUserInfo = (token: any) =>
  request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })

export const logout = () =>
  request({
    url: '/user/logout',
    method: 'post'
  })
