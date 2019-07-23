import Mock from 'mockjs'

export default () => {
  Mock.mock('/bl/console/inner/api/getVerificationCode', 'post', {
    result: {
      code: '208999',
      msg: '成功',
      data: {
      }
    }
  })

  Mock.mock('/bl/console/inner/api/customerLogin', 'post', {
    result: {
      code: '208999',
      msg: '成功',
      data: {
      }
    }
  })

  Mock.mock('/bl/console/inner/api/customerLoginOut', 'post', {
    result: {
      code: '208999',
      msg: '成功',
      data: {
      }
    }
  })
}