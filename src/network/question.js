import { request } from './request'
export function PostQuestion(Alldata) {
  return request({
    url: '/api/postquesion/',
    method: 'post',
    data: Alldata,
    Headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

}



export function GetQuestion() {
  return request({
    url: '/api/getquestion/',
  })
}

export function PostAnswer(Questionid, name, content) {
  return request({
    url: '/api/getquestionmessage/',
    params: {
      Questionid,
      name,
      content
    }
  })
}

export function GetQuestionDetail(Questionid) {
  return request({
    url: '/api/getquestiondetail/',
    params: {
      Questionid
    }
  })
}

export function GetQuestionDetailAnswer(Questionid) {
  return request({
    url: 'api/sendquestionmessage/',
    params: {
      Questionid
    }
  })
}