import { request } from './request'

export function GetBlog() {
  return request({
    url: '/api/getblog/',
  })
}


export function GetBlogDetail(id) {
  return request({
    url: '/api/getlogetail/',
    params: {
      id
    }
  })
}


export function PostMessage(blogid, name, message) {
  return request({
    url: '/api/getblogmessage/',
    params: {
      blogid,
      name,
      message
    }
  })
}

export function GetMessage(blogid) {
  return request({
    url: '/api/sendblogmessage/',
    params: {
      blogid
    }
  })
}