import { request } from './request'



export function PostForum(title, name) {
  return request({
    url: '/api/postforum/',
    params: {
      title,
      name
    }
  })
 
}

export function GetForum() {
  return request({
    url: '/api/getforum/',
  })

}



export function PostForumMessage(Alldata) {
  return request({
    url: '/api/getforummessage/',
    method: 'post',
    data: Alldata,
    Headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

}

//获取根据论坛ID获取论坛详情
export function GetForumDetail(forumid) {
  return request({
    url: '/api/getforumdetail/',
    params: {
      forumid
    }
  })
}


//根据论坛ID获取论坛详情的回复
export function GetForumDetailMess(forumid) {
  return request({
    url: '/api/sendforummessage/',
    params: {
      forumid
    }
  })
}