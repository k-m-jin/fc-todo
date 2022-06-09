//DOM
const addInput = document.querySelector('.todo-add-input')
const formEl = document.querySelector('.todo-add')
const todoList = document.querySelector('.todo-list')
const todoBox = document.querySelector('.todo-list-box')
let deleteBtn
let todos = []
//
const API_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_KEY = 'FcKdtJs202204'
const USER_NAME = 'KDT2_KimMyeongJin'
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202204',
  username: 'KDT2_KimMyeongJin',
}

// 첫 화면!
renderTodo()

formEl.addEventListener('submit', async (e) => {
  e.preventDefault()
  await createTodo(addInput.value)
  addInput.value = ''
  addInput.focus()
  renderTodo()
})

console.log(deleteBtn)

async function createTodo(todoTitle) {
  const { data } = await axios({
    url: API_URL,
    method: 'POST',
    headers,
    data: {
      title: todoTitle,
      done: false,
      order: 0,
    },
  })
  console.log(data)
}

async function readTodo() {
  const { data } = await axios({
    url: API_URL,
    method: 'GET',
    headers,
  })
  todos = []
  data.forEach((item) => todos.push(item))
}

async function deleteTodo(id) {
  const res = await axios({
    url: `${API_URL}/${id}`,
    method: 'DELETE',
    headers,
  })
  console.log(res)
  renderTodo()
}

async function renderTodo() {
  await readTodo()
  const todoEl = todos.map(
    (todo) => /*html */ `
    <li class="todo-item">
      <input type="checkbox" class="item-check"/ >
        <div class="todo-title">${todo.title}</div>
      
      <button class="btn" value=${todo.id}>수정</button>
      <button class="btn delete-btn" value=${todo.id}>삭제</button>
    </li>
    `
  )
  const todosEl = todoEl.join('')
  todoList.innerHTML = todosEl
  todoBox.append(todoList)

  // 삭제 버튼
  deleteBtn = document.querySelector('.delete-btn')
  deleteBtn?.addEventListener('click', () => {
    deleteTodo(deleteBtn.value)
  })
}
