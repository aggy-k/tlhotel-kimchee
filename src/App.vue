<template>
  <div id="app">
    <p>Hello</p>

    <div>
      <input v-model="form.mobile" type="text" name="mobile" placeholder="Mobile phone">
    </div>

    <div>
      <input v-model="form.email" type="text" name="email" placeholder="Email">
    </div>

    <div>
      <input v-model="form.password" type="password" name="password" placeholder="Password">
    </div>

    <div>
      <input v-model="form.idNo" type="text" name="idNo" placeholder="Id No">
    </div>

    <div>
      <input v-model="form.name" type="text" name="name" placeholder="Name">
    </div>

    <div>
      <input v-model="form.openIdUserId" type="text" name="openIdUserId" placeholder="WeChat ID">
    </div>

    <div>
      <input v-model="form.birth" type="text" name="birth" placeholder="Birthdate i.e. 1985-12-30">
    </div>

    <div>
      <input v-model="form.sex" type="radio" id="male" name="sex" value="1">
      <label for="male">Male</label><br>
      <input v-model="form.sex" type="radio" id="female" name="sex" value="2">
      <label for="female">Female</label><br>
    </div>

    <button @click="submit">Submit</button>

  </div>
</template>

<script>

// import { sha1 } from 'sha1'

export default {
  name: 'App',
  components: {
  },
  data: function() {
    return {
      form: {
        idType: '02',
        openIdType: 'WEIXIN',
        hotelGroupId: 2,
      }
    }
  },
  methods: {
    submit() {
      // {"hotelGroupId": "2", "sex": "1", "mobile": "18613132032", "email": "2847660xEEyzxz@qq.com", "idNo": "610430199408133034", "idType": "02", "password": "hello12345!", "openIdUserId": "hello_world", "openIdType": "WEIXIN", "appKey": 11202, "sessionId": "05B095A2F686479A881412353BD15BF3", "sign": "1ef8f7133c4e6355cc2ab8799198fe4de34c03a4"}
      console.log('this form', this.form)
      // const sha1 = require('sha1')
      // console.log(sha1('test'))
      const url = "http://122.224.119.138:7311/ipmsmember/membercard/registerMemberCardWithOutVerify"
      const cors_api_url = 'https://cors-anywhere.herokuapp.com/';
      // const appSecret = 'adbae04a417f359e6c8c1f8c57e043b4'

      // const loginUrl = 'http://122.224.119.138:7312/ipmsgroup/router'
      // const loginData = {
      //     "sign": "EC153966BC8270D1709AA2CC2E6656587E2ABA65",
      //     "hotelGroupCode": "GCBZG",
      //     "v": "3.0",
      //     "usercode": "shenGCBZG10",
      //     "method": "user.login",
      //     "local": "zh_CN",
      //     "format": "json",
      //     "appKey": 11202,
      //     "password": "shenGCBZG10"
      // }
      // let loginDataUrlEncoded = ''

      // Object.keys(loginData).forEach(key => {
      //   loginDataUrlEncoded += `${key}=${loginData[key]}&`
      // })
      let form = this.form
      // console.log(`?${loginDataUrlEncoded}`)
      // this.$api.post(cors_api_url + loginUrl + `?${loginDataUrlEncoded}`).then(res=> {
      //   console.log('login res', res)
      //   // form['sessionId'] = res.resultInfo
      // })

      // let signStr = appSecret
      // Object.keys(form).sort().forEach(f => {
      //   signStr += f
      //   signStr += form[f]
      // })
      // signStr += appSecret

      // console.log('signStr', signStr)

      // form['sign'] = sha1(signStr)

      console.log('form =>', form)

      let formStr = '?'

      Object.keys(form).forEach(key => {
        formStr += `${key}=${form[key]}&`
      })

      console.log('formStr =>', formStr)

      this.$api.post(cors_api_url + url + formStr).then(res => {
        console.log('post res', res)
      })
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
