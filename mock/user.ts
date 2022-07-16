import { param2Obj } from './utils'

const tokens: { [index: string]: any } = {
  admin: {
    token: 'admin-token'
  },
  developer: {
    token: 'developer-token'
  }
}

const users: { [index: string]: any } = {
  'admin-token': {
    roles: ['admin'],
    introduction: '超级用户',
    avatar: require('../src/assets/images/icon/wx_icon.png'),
    name: '超级用户'
  },
  'developer-token': {
    roles: ['developer'],
    introduction: '开发者',
    avatar: require('../src/assets/images/icon/wx_icon.png'),
    name: '开发者'
  }
}

export default {
  login: (res: any) => {
    const { username, password } = JSON.parse(res.body)
    const data = tokens[username]  

    if (data) {
      return {
        code: 20000,
        data
      }
    }

    return {
      code: 60204,
      message: 'Account or password is incorrect.'
    }
  },

  getUserInfo: (res: any) => {
    const { token } = param2Obj(res.url)
    const info = users[token]

    if (info) {
      return {
        code: 20000,
        data: info
      }
    }

    return {
      code: 50008,
      message: 'Login failed, unable to get user details.'
    }
  },

  logout: () => {
    return {
      code: 20000,
      data: 'success'
    }
  }
}
