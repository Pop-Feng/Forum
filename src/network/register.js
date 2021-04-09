import { request } from './request'

export function PostBlog(Alldata) {
  return request({
    url: '/api/postblog/',
    method: 'post',
    data: Alldata,
    Headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

}