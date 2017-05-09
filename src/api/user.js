import * as http from './http'

export default {
  login () {
    return http.get('/user/caiya' + '?accesstoken=ed20aac8-9fd8-45bf-8412-62fd2425b4a5', {})
  }
}
