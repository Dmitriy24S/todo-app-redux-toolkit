import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import * as reduxHooks from 'react-redux'
import * as actions from '../../redux/todoSlice'
import AddTodoForm from '../AddTodoForm'

jest.mock('react-redux')

const mockedDispatch = jest.spyOn(reduxHooks, 'useDispatch')

const onChange = jest.fn()

describe('AddTodoForm', () => {
  it('should create AddTodoForm', () => {
    mockedDispatch.mockResolvedValue(jest.fn())

    const component = render(<AddTodoForm />)

    expect(component).toMatchSnapshot()
  })

  it('should dispatch actions', () => {
    const dispatch = jest.fn()
    mockedDispatch.mockReturnValue(dispatch)

    // const component =
    render(<AddTodoForm />)

    // userEvent.type(screen.getByPlaceholderText('Add todo...'), 'Redux') // ! TypeError: Cannot read properties of undefined (reading 'type')
    // ! TestingLibraryElementError: Unable to find an element with the placeholder text of: Add todo...

    // userEvent.type(screen.getByPlaceholderText(/add todo/), 'Redux') // ! TypeError: Cannot read properties of undefined (reading 'type')

    // userEvent.type(screen.getByRole('textbox'), 'Redux')
    // userEvent.type(screen.getByLabelText('Todo Name'), 'Redux')

    userEvent.type(screen.getByTestId('todo-input'), 'Redux') // ! TestingLibraryElementError: Unable to find an element by: [data-testid="todo-input"]

    // const input = screen.getByTestId('todoinput')

    // expect(onChange).toHaveBeenCalledTimes(5)
    // ! Expected number of calls: 5
    // ! Received number of calls: 0

    const mockedAddTodo = jest.spyOn(actions, 'addTodo') // !

    // fireEvent.click(screen.getByText(/submit/))
    fireEvent.click(screen.getByText('Submit'))

    expect(dispatch).toHaveBeenCalledTimes(1)
    // expect(mockedAddTodo).toHaveBeenCalledWith('Redux')
    expect(mockedAddTodo).toHaveBeenCalledWith({ title: 'Redux' })
    // ! Expected: "Redux"
    // ! Received: {"title": "Redux"}
  })
})
