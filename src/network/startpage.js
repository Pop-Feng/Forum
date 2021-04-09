import { request } from './request'


export function getLoginMultidata(username, password) {
  return request({
    url: '/api/login/',
    params: {
      username,
      password
    }
  })
}


export function getRegisterMultidata(name, username, password) {
  return request({
    url: '/api/register/',
    params: {
      name,
      username,
      password
    }
  })

} 