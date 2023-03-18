import todoReducer, { addTodo, deleteTodo, toggleComplete } from '../todoSlice'

const initialState = [
  { id: 1, title: 'todo1', completed: false },
  { id: 2, title: 'todo2', completed: false },
  { id: 3, title: 'todo3', completed: true },
  { id: 4, title: 'todo4', completed: true },
  { id: 5, title: 'todo5', completed: false },
]

describe('todoSlice', () => {
  it('should return default state when passed empty action', () => {
    const result = todoReducer(undefined, { type: '' }) // state, action

    // expect(result).toEqual([])
    expect(result).toEqual(initialState)
  })

  it('should add new todo with "addTodo" action', () => {
    // const action = { type: addTodo.type, payload: 'Redux' }
    const action = { type: addTodo.type, payload: { title: 'Redux' } }

    const result = todoReducer([], action)

    // expect(result).toContain('Redux')
    // ! Expected value: "Redux"
    // ! Received array: [{"completed": false, "id": 1678996430473, "title": "Redux"}]
    expect(result[0].title).toBe('Redux')
  })

  it('should toggle todo complete with "toggleComplete" action', () => {
    const todos = [{ id: 1234, title: 'Redux', completed: false }]

    const action = { type: toggleComplete.type, payload: { id: 1234, completed: true } } // TODO: refactor?

    const result = todoReducer(todos, action)
    // console.log('result', result) // result [ { id: 1234, title: 'Redux', completed: true } ]

    expect(result[0].completed).toBe(true)
  })

  it('should delete todo with "deleteTodo" action', () => {
    const todos = [{ id: 1234, title: 'Redux', completed: false }]

    const action = { type: deleteTodo.type, payload: { id: 1234 } }

    const result = todoReducer(todos, action)

    // expect(result[0]).toEqual([])
    // ! Expected: []
    // ! Received: undefined
    expect(result).toEqual([])
  })
})
