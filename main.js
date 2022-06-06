//DOM
const input = document.querySelector('.todo-add-input')
const formEl = document.querySelector('.todo-add')

//
const API_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_KEY = 'FcKdtJs202204'
const USER_NAME = 'KDT2_KimMyeongJin'
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2_KimMyeongJin',
}

async function createTodo() {
  const { data } = await axios({
    url: API_URL,
    method: 'POST',
    headers,
    data: {
      title: '할 일 관리 프로젝트 과제 PR 생성',
      done: false,
      order: 0,
    },
  })
  console.log(data)
}
// createTodo()

async function readTodo() {
  const res = await axios({
    url: API_URL,
    method: 'GET',
    headers,
  })
  console.log(res)
}
readTodo()

async function deleteTodo(id) {
  const res = await axios({
    url: `${API_URL}/${id}`,
    method: 'DELETE',
    headers,
  })
  console.log(res)
}
deleteTodo('5ClmE3kDLC15ycFmJGoI')
